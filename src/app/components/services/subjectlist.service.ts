import { Injectable } from '@angular/core';

interface Subject {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class SubjectlistService {
  private subjectList: Subject[] = [];
  private nextId: number = 1;

  getSubjects(): Subject[] {
    return this.subjectList;
  }

  addSubject(name: string) {
    if (name.trim()) {
      const subject: Subject = {
        id: this.nextId++,
        name: name.trim()
      };
      this.subjectList.push(subject);
    }
  }

  removeSubject(id: number) {
    this.subjectList = this.subjectList.filter(subject => subject.id !== id);
  }
}
