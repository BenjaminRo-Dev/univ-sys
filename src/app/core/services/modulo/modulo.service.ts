import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModuloService {
  private http = inject(HttpClient);

  constructor() { }

  getModulos() {
    return this.http.get('https://jsonplaceholder.typicode.com/modulos');
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
