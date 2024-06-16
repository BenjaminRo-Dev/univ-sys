import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiBaseUrl;

  constructor() { }

  getMaterias() {
    return this.http.get(`${this.apiUrl}materia`);
  }

}
