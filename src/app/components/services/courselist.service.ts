import { Injectable } from '@angular/core';

interface Course {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class CourselistService {
  private courseList: Course[] = [
    { id: 1, name: 'BSIT' },
    { id: 2, name: 'BSHM' },
    { id: 3, name: 'BSEED' }
  ];
  private nextId: number = 4;

  getCourses(): Course[] {
    return this.courseList;
  }

  addCourse(name: string) {
    if (name.trim()) {
      const course: Course = {
        id: this.nextId,
        name: name.trim()
      };
      this.courseList.push(course);
      this.nextId++;
    }
  }

  removeCourse(id: number) {
    this.courseList = this.courseList.filter(course => course.id !== id);
  }
}
