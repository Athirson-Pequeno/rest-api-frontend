import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credentials } from '../../models/credentials';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  private readonly API = 'http://192.168.0.129:8080/auth/signin';

  constructor(private httpClient: HttpClient) {}

  login(credential: Credentials) {
    return this.httpClient.post(this.API, credential)
  }
}
