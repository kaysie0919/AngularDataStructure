import { Injectable } from '@angular/core';

interface Employee {
  id: number;
  name: string;
  job: string;
  position: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeelistService {
  private employeeList: Employee[] = [];
  private nextId: number = 1;

  getEmployees(): Employee[] {
    return this.employeeList;
  }

  addEmployee(name: string, job: string, position: string) {
    if (name.trim() && job.trim() && position.trim()) {
      const employee: Employee = {
        id: this.nextId,
        name: name.trim(),
        job: job.trim(),
        position: position.trim()
      };
      this.employeeList.push(employee);
      this.nextId++;
    }
  }

  removeEmployee(id: number) {
    this.employeeList = this.employeeList.filter(employee => employee.id !== id);
  }
}
