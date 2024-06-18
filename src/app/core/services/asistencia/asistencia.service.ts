import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {

  private http = inject(HttpClient);
  private apiUrl = environment.apiBaseUrl;

  constructor() {}

  getHorarioById(userId: number){
    return this.http.get(`${this.apiUrl}asistencia/docente/${userId}`);
  }

  storeAsistencia(asistencia: any) {
    return this.http.post(`${this.apiUrl}asistencia/store`, asistencia);
  }


}
