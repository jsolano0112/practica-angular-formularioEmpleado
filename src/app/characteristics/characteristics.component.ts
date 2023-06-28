import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.css']
})
export class CharacteristicsComponent {
  @Output() chEmployee = new EventEmitter<string>();

  addCh(value:string){
    this.chEmployee.emit(value);
  }
}
