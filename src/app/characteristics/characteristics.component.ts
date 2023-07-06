import { Component, EventEmitter, Output } from '@angular/core';
import { ServiceEmployeeService } from '../service-employee.service';

@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.css']
})
export class CharacteristicsComponent {
  @Output() chEmployee = new EventEmitter<string>();

  constructor(private miServicio:ServiceEmployeeService) {

  }
  
  addCh(value:string){
    this.miServicio.muestraMensaje(value);
    this.chEmployee.emit(value);
  }
}
