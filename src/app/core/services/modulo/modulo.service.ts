import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ModuloService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiBaseUrl;

  constructor() { }

  getModulos() {
    return this.http.get(`${this.apiUrl}modulo`);
  }

  getAulas(id: number) {
    return this.http.get(`${this.apiUrl}modulo/${id}`);
  }

  // getModuloById(id: number) {
  //   return this.http.get(`https://jsonplaceholder.typicode.com/modulos/${id}`);
  // }

  // createModulo(modulo: any) {
  //   return this.http.post('https://jsonplaceholder.typicode.com/modulos', modulo);
  // }

  // updateModulo(modulo: any) {
  //   return this.http.put(`https://jsonplaceholder.typicode.com/modulos/${modulo.id}`, modulo);
  // }

  // deleteModulo(id: number) {
  //   return this.http.delete(`https://jsonplaceholder.typicode.com/modulos/${id}`);
  // }
  
}
