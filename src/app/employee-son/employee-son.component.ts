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
}
