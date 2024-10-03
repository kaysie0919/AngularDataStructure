import { Component } from '@angular/core';

@Component({
  selector: 'app-presentationlist',
  templateUrl: './presentationlist.component.html',
  styleUrl: './presentationlist.component.css'
})
export class PresentationlistComponent {
  topic: string = '';
  presentationList: string[] = ['The Future of AI', 'Sustainable Energy Solutions', 'Advances in Quantum Computing'];

  addTopic() {
    if (this.topic.trim()) {
      this.presentationList.push(this.topic.trim());
      this.topic = '';
    }
  }

}
