import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Member} from './member.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
};

@Injectable()
export class MemberService {
  private readonly serviceURL =  environment.apiUrl + 'Member';

  constructor(private http: HttpClient) { }

  GetAllMembers(): Promise<any> {
    return this.http.get<Array<Member>>(`${this.serviceURL}/all`).toPromise();

  }

}
