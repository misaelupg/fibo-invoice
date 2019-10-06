import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private readonly serviceURL =  environment.apiUrl + 'project';

  constructor(private http: HttpClient) { }

  AddProject(project: IProject): Promise<any> {
    return this.http.post<any>(`${this.serviceURL}/add`, project, httpOptions).toPromise();

  }
  UpdateProject(id: number, project: IProject): Promise<any> {
    return this.http.put<any>(`${this.serviceURL}/${id}`, project,  httpOptions).toPromise();
  }

  GetAllProjects(): Promise<Array<IModelResponse>> {
    return this.http.get<Array<IModelResponse>>(`${this.serviceURL}/all`).toPromise();
  }

  GetRpojectById(id: number): Promise<IModelResponse> {
    return this.http.get<IModelResponse>(`${this.serviceURL}/${id}`).toPromise();
  }

}
