import { Component } from '@angular/core';
import { Employee } from './employee.models';
import { ServiceEmployeeService } from './service-employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee List';

  constructor(private miServicio:ServiceEmployeeService) {

  }
  employees: Employee[] = [
    new Employee("Juana","Solano","Engineer",1000000000),
    new Employee("Patricia","Perez","Lawyer",7000),
    new Employee("Jorge","Sanchez","Doctor",22222),
  ];

  AddingEmployee(){
    let myEmployee = new Employee(this.cName, this.cLastname, this.cPosition, this.cSalary);
    this.miServicio.muestraMensaje("Name of employee " + myEmployee.name);
    this.employees.push(myEmployee);
  }

  cName : string = "";
  cLastname : string = "";
  cPosition : string = ""; 
  cSalary : number = 0;
}
