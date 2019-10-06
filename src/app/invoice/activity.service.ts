import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Activity} from './models/activity.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private readonly serviceURL =  environment.apiUrl + 'Activity';

  constructor(private http: HttpClient) { }

  AddActivity(activity: Activity): Promise<any> {
    return this.http.post<any>(`${this.serviceURL}/add`, activity, httpOptions).toPromise();

  }

}
