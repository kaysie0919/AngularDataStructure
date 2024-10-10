import { Component } from '@angular/core';
import { ClassroomlistService } from '../services/classroomlist.service';
import { Student } from '../interface/classroomlist';

@Component({
  selector: 'app-classroomlist',
  templateUrl: './classroomlist.component.html',
  styleUrls: ['./classroomlist.component.css']
})
export class ClassroomlistComponent {
  studentName: string = '';
  classroomList: Student[] = [];
  nextId: number = 1;

  constructor(private classroomlistService: ClassroomlistService) {
    this.classroomList = this.classroomlistService.getClassroomList();
  }

  addStudent() {
    if (this.studentName.trim()) {
      const newStudent: Student = { id: this.nextId++, name: this.studentName.trim() };
      this.classroomlistService.addStudent(newStudent);
      this.updateClassroomList();
      this.studentName = '';
    }
  }

  removeStudent(id: number) {
    this.classroomlistService.removeStudent(id);
    this.updateClassroomList();
  }

  private updateClassroomList() {
    this.classroomList = this.classroomlistService.getClassroomList();
  }
}
