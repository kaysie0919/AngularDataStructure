import { Component } from '@angular/core';

@Component({
  selector: 'app-classroomlist',
  templateUrl: './classroomlist.component.html',
  styleUrl: './classroomlist.component.css'
})
export class ClassroomlistComponent {
  studentName: string = '';
  classroomList: string[] = ['John', 'Sarah', 'Michael'];

  addStudent() {
    if (this.studentName.trim()) {
      this.classroomList.push(this.studentName.trim());
      this.studentName = '';
    }
  }

}
