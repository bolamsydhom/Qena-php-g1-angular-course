import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

interface Hamada {
  person: {
    _id: string;
    email: string;
    password: string;
    __v: 0;
    id: string;
  };
  token: string
}


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login(body: any): Observable<Hamada> {
    return this.httpClient.post<Hamada>(environment.baseUrl + 'user/login', body);
  }
}
