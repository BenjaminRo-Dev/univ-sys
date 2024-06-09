import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FacultadService {
  private http = inject(HttpClient);

  constructor() { }

  getFacultades() {
    return this.http.get('https://jsonplaceholder.typicode.com/facultades');
  }
  
}
