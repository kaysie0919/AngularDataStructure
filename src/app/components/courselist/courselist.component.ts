import { Component } from '@angular/core';
import { CourselistService } from '../services/courselist.service';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent {
  course: string = '';
  courseList: { id: number; name: string }[] = [];

  constructor(private courseService: CourselistService) {
    this.courseList = this.courseService.getCourses();
  }

  addCourse() {
    this.courseService.addCourse(this.course);
    this.course = '';
    this.courseList = this.courseService.getCourses();
  }

  removeCourse(id: number) {
    this.courseService.removeCourse(id);
    this.courseList = this.courseService.getCourses();
  }
}
