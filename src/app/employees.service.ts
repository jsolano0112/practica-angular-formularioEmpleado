import { Injectable } from "@angular/core";
import { Employee } from "./employee.models";
import { ServiceEmployeeService } from "./service-employee.service";

@Injectable()
export class EmployeesService {
  constructor(private serviceWindow: ServiceEmployeeService) {

  }

  employees: Employee[] = [
    new Employee("Juana", "Solano", "Engineer", 1000000000),
    new Employee("Patricia", "Perez", "Lawyer", 7000),
    new Employee("Jorge", "Sanchez", "Doctor", 22222),
  ];

  addEmployeeService(employee: Employee) {
    this.serviceWindow.muestraMensaje("Person added."+"\n"+employee.name);
    this.employees.push(employee);
  }

}