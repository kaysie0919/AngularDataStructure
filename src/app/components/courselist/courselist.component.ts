import { Component } from '@angular/core';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrl: './courselist.component.css'
})
export class CourselistComponent {
  course: string = '';
  courseList: string [] = ["BSIT", "BSHM", "BSEED"];

  Add() {
    this.courseList.push(this.course);
  } 

}
