import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CarreraService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiBaseUrl;
  
  constructor() { }

  getCarreras() {
    return this.http.get(`${this.apiUrl}carrera`);
  }

  getMaterias(sigla: string) {
    return this.http.get(`${this.apiUrl}carrera/${sigla}`);
  }

  // getCarreraById(id: number) {
  //   return this.http.get(`https://jsonplaceholder.typicode.com/carreras/${id}`);
  // }

  // createCarrera(carrera: any) {
  //   return this.http.post('https://jsonplaceholder.typicode.com/carreras', carrera);
  // }

  // updateCarrera(carrera: any) {
  //   return this.http.put(`https://jsonplaceholder.typicode.com/carreras/${carrera.id}`, carrera);
  // }

  // deleteCarrera(id: number) {
  //   return this.http.delete(`https://jsonplaceholder.typicode.com/carreras/${id}`);
  // }

}
