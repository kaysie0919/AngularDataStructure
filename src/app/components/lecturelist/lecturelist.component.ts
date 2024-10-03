import { Component } from '@angular/core';

@Component({
  selector: 'app-lecturelist',
  templateUrl: './lecturelist.component.html',
  styleUrl: './lecturelist.component.css'
})
export class LecturelistComponent {

  lecture: string = '';
  lectureList: string[] = ['Introduction to Angular', 'Data Binding in Angular', 'Angular Directives'];

  addLecture() {
    if (this.lecture.trim()) {
      this.lectureList.push(this.lecture.trim());
      this.lecture = '';
    }
  }
}
