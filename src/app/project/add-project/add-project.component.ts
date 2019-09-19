import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../project.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styles: []
})
export class AddProjectComponent implements OnInit {

  project: IModelResponse;
  projectForm: FormGroup;
  status = 'new';

  constructor(private fb: FormBuilder,
              private projectService: ProjectService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.projectForm = this.fb.group({
      id: ['0'],
      name : ['', [Validators.required, Validators.maxLength(80), Validators.minLength(1)]],
      description: ['']
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.status = 'update';
      this.GetProjectDetails(parseInt(id, 10));
    } else {
      this.status = 'new';
    }
  }

  private GetProjectDetails(id: number) {
    this.projectService.GetRpojectById(id)
      .then((response) => {
        this.project = response;

        this.projectForm.controls['id'].setValue(this.project.id);
        this.projectForm.controls['name'].setValue(this.project.name);
        this.projectForm.controls['description'].setValue(this.project.description);
      })
      .catch((error) => {
        console.error(`Error al obtener proyecto`, error);
        if(error.status === 404) {
          console.log(`El Projecto con el Id ${id} no existe`);
        }
      });
  }

  onSubmit() {
    const newProject: IProject = {
      Id: this.projectForm.get('id').value,
      Name: this.projectForm.get('name').value,
      Description: this.projectForm.get('description').value,
    };

    if(this.status === 'new') {
      this.projectService.AddProject(newProject)
        .then(() => {
          this.projectForm.get('name').setValue('');
          this.projectForm.get('description').setValue('');

          this.router.navigate(['/project/list']);
        })
        .catch((error) => { console.error('Error al insertar el registro', error); });
    } else if(this.status === 'update') {
      this.projectService.UpdateProject(newProject.Id, newProject)
        .then(() => {
          this.projectForm.get('name').setValue('');
          this.projectForm.get('description').setValue('');

          this.router.navigate(['/project/list']);
        })
        .catch((error) => { console.error('Error al actualizar el registro', error); });
    }
  }
}
