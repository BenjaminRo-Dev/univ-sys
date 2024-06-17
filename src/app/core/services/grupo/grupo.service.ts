import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiBaseUrl;
 
  constructor() { }

  getGrupos() {
    return this.http.get(`${this.apiUrl}grupo`);
  }

  guardarGrupo(grupo: any) {
    return this.http.post(`${this.apiUrl}grupo/store`, grupo);
  }

  asignarHorarioAula(grupoHorario: any){
    return this.http.post(`${this.apiUrl}grupo/asignargrupo`, grupoHorario);
  }

}
