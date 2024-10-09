import { Component } from '@angular/core';
import { StudentlistService } from '../services/studentlist.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent {
  name: string = '';
  course: string = '';
  section: string = '';
  studentList: any[] = []; // Use the Student interface for better type safety

  constructor(private studentService: StudentlistService) {
    this.studentList = this.studentService.getStudents();
  }

  addItem() {
    if (this.name.trim() && this.course.trim() && this.section.trim()) {
      this.studentService.addStudent(this.name, this.course, this.section);
      this.name = '';
      this.course = '';
      this.section = '';
      this.studentList = this.studentService.getStudents();
    } else {
      console.log('Please fill out all fields.');
    }
  }

  removeItem(id: number) {
    this.studentService.removeStudent(id);
    this.studentList = this.studentService.getStudents(); // Update the local list
  }
}
