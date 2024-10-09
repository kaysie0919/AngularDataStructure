import { Component } from '@angular/core';
import { EmployeelistService } from '../services/employeelist.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent {
  name: string = '';
  job: string = '';
  position: string = '';
  employeeList: any[] = [];

  constructor(private employeeService: EmployeelistService) {
    this.employeeList = this.employeeService.getEmployees();
  }

  addItem() {
    if (this.name.trim() && this.job.trim() && this.position.trim()) {
      this.employeeService.addEmployee(this.name, this.job, this.position);
      this.name = '';
      this.job = '';
      this.position = '';
      this.employeeList = this.employeeService.getEmployees();
    }
  }

  removeItem(id: number) {
    this.employeeService.removeEmployee(id);
    this.employeeList = this.employeeService.getEmployees();
  }
}
