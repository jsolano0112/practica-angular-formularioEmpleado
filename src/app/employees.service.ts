import { Employee } from "./employee.models";

export class EmployeesService{
    employees: Employee[] = [
        new Employee("Juana","Solano","Engineer",1000000000),
        new Employee("Patricia","Perez","Lawyer",7000),
        new Employee("Jorge","Sanchez","Doctor",22222),
      ];

      addEmployeeService(employee:Employee){
        this.employees.push(employee);
      }
    
}