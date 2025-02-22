import { Injectable } from '@angular/core';
import { Sector } from '../../models/sector';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { environment } from '../../shared/environment';

@Injectable({
  providedIn: 'root',
})
export class SectorsService {
  private readonly API = `${environment.apiBaseUrl}/api/sectors/v1`;

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Sector[]>(this.API).pipe(
      catchError((err) => {
        console.error('Erro ao buscar setores:', err);
        return of([]);
      })
    );
  }

  create(sector: Sector) {
    return this.httpClient.post<Sector>(this.API, sector);
  }

  deleteSector(id: number, reloadCallback: () => void) {
    this.httpClient.delete(`${this.API}/delete/${id}`).subscribe({
      next: () => {
        reloadCallback();
      },
      error: (err) => console.error('Erro ao deletar setor:', err),
    });
  }
}
