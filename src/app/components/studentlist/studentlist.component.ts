import { Component } from '@angular/core';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrl: './studentlist.component.css'
})
export class StudentlistComponent {

  list: string = '';
  studentList: string[] = [];

  addItem() {
    if (this.list.trim()) {
      this.studentList.push(this.list.trim());
      this.list = '';
    }
    else {
      return;
    }
  }
}