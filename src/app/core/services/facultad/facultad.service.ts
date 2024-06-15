import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FacultadService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiBaseUrl;

  constructor() { }

  getFacultades() {
    // return this.http.get('https://jsonplaceholder.typicode.com/facultades');
    return this.http.get(`${this.apiUrl}facultad`);
  }
  
}
