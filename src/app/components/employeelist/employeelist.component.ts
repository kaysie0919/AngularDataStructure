import { Component } from '@angular/core';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrl: './employeelist.component.css'
})
export class EmployeelistComponent {
  name: string = '';
  job: string = '';
  position: string = '';
  employeelist: string [] = [];

  Add() {
    if (this.name.trim() && this.job.trim() && this.position.trim()) {
      const employeeInfo = `Name: ${this.name.trim()} - Job: ${this.job.trim()} - Position: ${this.position.trim()}`;
      this.employeelist.push(employeeInfo);
    }
    else {
      return;
    }
  }

}
