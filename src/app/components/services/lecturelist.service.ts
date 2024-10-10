import { Injectable } from '@angular/core';
import { Lecture } from '../interface/lecturelist';

@Injectable({
  providedIn: 'root'
})
export class LecturelistService {
  private lectureList: Lecture[] = [];

  getLectureList(): Lecture[] {
    return this.lectureList;
  }

  addLecture(lecture: Lecture): void {
    this.lectureList.push(lecture);
  }

  removeLecture(id: number): void {
    this.lectureList = this.lectureList.filter(lecture => lecture.id !== id);
  }
}
