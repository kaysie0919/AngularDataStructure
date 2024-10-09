import { Injectable } from '@angular/core';

interface Student {
  id: number;
  name: string;
  course: string;
  section: string;
}

@Injectable({
  providedIn: 'root'
})
export class StudentlistService {
  private studentList: Student[] = [];
  private nextId: number = 1; // Variable to keep track of the next ID

  getStudents(): Student[] {
    return this.studentList;
  }

  addStudent(name: string, course: string, section: string) {
    if (name.trim() && course.trim() && section.trim()) {
      const student: Student = {
        id: this.nextId++, // Assign the current ID and increment for the next
        name: name.trim(),
        course: course.trim(),
        section: section.trim()
      };
      this.studentList.push(student);
    }
  }

  removeStudent(id: number) {
    this.studentList = this.studentList.filter(student => student.id !== id);
  }
}
