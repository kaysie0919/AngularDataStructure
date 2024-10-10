import { Component } from '@angular/core';
import { LecturelistService } from '../services/lecturelist.service';
import { Lecture } from '../interface/lecturelist';

@Component({
  selector: 'app-lecturelist',
  templateUrl: './lecturelist.component.html',
  styleUrls: ['./lecturelist.component.css']
})
export class LecturelistComponent {
  lectureTitle: string = '';
  lectureList: Lecture[] = [];
  nextId: number = 1;

  constructor(private lecturelistService: LecturelistService) {
    this.lectureList = this.lecturelistService.getLectureList();
  }

  addLecture() {
    if (this.lectureTitle.trim()) {
      const newLecture: Lecture = { id: this.nextId++, title: this.lectureTitle.trim() };
      this.lecturelistService.addLecture(newLecture);
      this.updateLectureList();
      this.lectureTitle = '';
    }
  }

  removeLecture(id: number) {
    this.lecturelistService.removeLecture(id);
    this.updateLectureList();
  }

  private updateLectureList() {
    this.lectureList = this.lecturelistService.getLectureList();
  }
}
