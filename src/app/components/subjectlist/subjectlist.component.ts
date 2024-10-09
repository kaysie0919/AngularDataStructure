import { Component } from '@angular/core';
import { SubjectlistService } from '../services/subjectlist.service';

@Component({
  selector: 'app-subjectlist',
  templateUrl: './subjectlist.component.html',
  styleUrls: ['./subjectlist.component.css']
})
export class SubjectlistComponent {
  subject: string = '';
  subjectList: { id: number; name: string }[] = [];

  constructor(private subjectService: SubjectlistService) {
    this.subjectList = this.subjectService.getSubjects();
  }

  addSubject() {
    this.subjectService.addSubject(this.subject);
    this.subjectList = this.subjectService.getSubjects();
    this.subject = '';
  }

  removeSubject(id: number) {
    this.subjectService.removeSubject(id);
    this.subjectList = this.subjectService.getSubjects();
  }
}
