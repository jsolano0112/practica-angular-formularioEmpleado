import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceEmployeeService {

  constructor() { }

  muestraMensaje(mensaje:string){
    alert(mensaje);
  }
}
