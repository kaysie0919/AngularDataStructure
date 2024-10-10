import { Injectable } from '@angular/core';
import { Student } from '../interface/classroomlist';

@Injectable({
  providedIn: 'root'
})
export class ClassroomlistService {
  private classroomList: Student[] = [];

  getClassroomList(): Student[] {
    return this.classroomList;
  }

  addStudent(student: Student): void {
    this.classroomList.push(student);
  }

  removeStudent(id: number): void {
    this.classroomList = this.classroomList.filter(student => student.id !== id);
  }
}
