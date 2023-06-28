import { Component } from '@angular/core';
import { Employee } from './employee.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee List';

 
  cName : string = "";
  cLastname : string = "";
  cPosition : string = ""; 
  cSalary : number = 0;
}
