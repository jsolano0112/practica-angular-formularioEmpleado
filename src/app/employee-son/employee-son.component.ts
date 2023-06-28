import { Component, Input } from '@angular/core';
import { Employee } from '../employee.models';

@Component({
  selector: 'app-employee-son',
  templateUrl: './employee-son.component.html',
  styleUrls: ['./employee-son.component.css']
})
export class EmployeeSonComponent {

  @Input() employeeList: Employee;

  @Input() idx: number;

  employees: Employee[] = [
    new Employee("Juana","Solano","Engineer",1000000000),
    new Employee("Patricia","Perez","Lawyer",7000),
    new Employee("Jorge","Sanchez","Doctor",22222),
  ];

  AddingEmployee(employee: Employee){
    this.employees.push(employee);
  }


  
  arrayCh = [""];

  addCh(newCh: string){
    this.arrayCh.push(newCh);
  }
}
