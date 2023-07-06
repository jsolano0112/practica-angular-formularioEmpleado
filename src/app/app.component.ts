import { Component } from '@angular/core';
import { Employee } from './employee.models';
import { ServiceEmployeeService } from './service-employee.service';
import { EmployeesService } from './employees.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee List';

  // añadir servicio
  constructor(private miServicio:ServiceEmployeeService,private employeeService:EmployeesService) {
    this.employees = this.employeeService.employees;
  }
  employees: Employee[] = [];

  AddingEmployee(){
    let myEmployee = new Employee(this.cName, this.cLastname, this.cPosition, this.cSalary);
    this.miServicio.muestraMensaje("Name of employee " + myEmployee.name);
    this.employeeService.addEmployeeService(myEmployee);
    
  }

  cName : string = "";
  cLastname : string = "";
  cPosition : string = ""; 
  cSalary : number = 0;
}
