import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  AddProject(project: IProject): Promise<any> {
    return this.http.post<any>('https:localhost:5001/api/project/add', project, httpOptions).toPromise();

  }
  UpdateProject(id: number, project: IProject): Promise<any> {
    return this.http.put<any>(`https:localhost:5001/api/project/${id}`, project,  httpOptions).toPromise();
  }

  GetAllProjects(): Promise<Array<IModelResponse>> {
    return this.http.get<Array<IModelResponse>>('https:localhost:5001/api/project/all').toPromise();
  }

  GetRpojectById(id: number): Promise<IModelResponse> {
    return this.http.get<IModelResponse>(`https:localhost:5001/api/project/${id}`).toPromise();
  }

}
