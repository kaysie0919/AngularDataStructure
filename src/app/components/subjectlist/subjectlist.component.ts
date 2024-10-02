import { Component } from '@angular/core';

@Component({
  selector: 'app-subjectlist',
  templateUrl: './subjectlist.component.html',
  styleUrl: './subjectlist.component.css'
})
export class SubjectlistComponent {
  subject: string = '';
  subjectList: string[] = ['Mathematics', 'Physics', 'Chemistry'];

  addSubject() {
    if (this.subject.trim()) {
      this.subjectList.push(this.subject.trim());
      this.subject = '';
    }
  }

}
