import { Component } from '@angular/core';
import { Employee } from './employee.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee List';

  employees: Employee[] = [
    new Employee("Juana","Solano","Engineer",1000000000),
    new Employee("Patricia","Perez","Lawyer",7000),
    new Employee("Jorge","Sanchez","Doctor",22222),
  ];

  cName : string = "";
  cLastname : string = "";
  cPosition : string = ""; 
  cSalary : number = 0;
}
