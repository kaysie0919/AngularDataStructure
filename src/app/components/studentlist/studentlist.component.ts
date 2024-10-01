import { Component } from '@angular/core';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent {

  name: string = '';
  course: string = '';
  section: string = '';
  studentList: string[] = [];

  addItem() {
    if (this.name.trim() && this.course.trim() && this.section.trim()) {
      const studentInfo = `${this.name.trim()} - Course: ${this.course.trim()}, Section: ${this.section.trim()}`;
      this.studentList.push(studentInfo);

      this.name = '';
      this.course = '';
      this.section = '';
    }
    else {
      console.log('Please fill out all fields.');
    }
  }
}
