import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarreraService {
  private http = inject(HttpClient);
  
  constructor() { }

  getCarreras() {
    return this.http.get('https://jsonplaceholder.typicode.com/carreras');
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
