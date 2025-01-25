import { Injectable } from '@angular/core';
import { Sector } from '../../models/sector';
import { HttpClient } from '@angular/common/http';
import { tap, first, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SectorsService {
  private readonly API = 'http://192.168.0.129:8080/api/sectors/v1';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Sector[]>(this.API).pipe(
      first(),
      tap(),
      catchError((err) => {
        console.error('Erro ao buscar setores:', err);
        return of([]);
      })
    );
  }

  create(sector: Sector) {
    return this.httpClient.post(this.API, sector);
  }
}
