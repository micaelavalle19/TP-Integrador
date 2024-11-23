import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  readonly baseUrl = 'http://localhost:3000/api/'

  constructor(private http: HttpClient) { }

  registro(nombre: string,apellido: string, contraseña: string, fecha: Date, mail: string, rol:string, tipos_par: number){
    const url = this.baseUrl + 'participantes/registro';
    const fecha_nacimiento = fecha.toISOString().split('T')[0]
    const data = {nombre, apellido, contraseña, fecha_nacimiento, mail, rol, tipos_par}
    return this.http.post<any>(url, data)
  }
}
