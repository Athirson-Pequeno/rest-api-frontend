import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credentials } from '../../models/credentials';
import { environment } from '../../shared/environment';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  private readonly API = `${environment.apiBaseUrl}/auth/signin`;

  constructor(private httpClient: HttpClient) {}

  login(credential: Credentials): Observable<any> {
    return this.httpClient.post(this.API, credential).pipe(
      tap((response: any) => {
        if (response?.accessToken) {
          localStorage.setItem('jwtToken', response.accessToken);
          console.log(localStorage.getItem('jwtToken'))
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem('jwtToken'); 
  }

  getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }
}
