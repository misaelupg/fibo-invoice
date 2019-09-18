import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private fb: FormBuilder,
              private projectService: ProjectService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.projectForm = this.fb.group({
      id: ['0'],
      name : ['', [Validators.required, Validators.maxLength(80), Validators.minLength(1)]],
      description: ['']
    });

    const id = this.route.snapshot.paramMap.get('id');
    console.log("id", id);
    if (id) {
      this.projectService.GetRpojectById(parseInt(id))
        .then((response) => {
          this.project = response;

          this.projectForm.controls['id'].setValue(this.project.Id);
          this.projectForm.controls['name'].setValue(this.project.Name);
          this.projectForm.controls['description'].setValue(this.project.Description);
        });
    }
  }
}
