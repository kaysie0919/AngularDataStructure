import { Component } from '@angular/core';

@Component({
  selector: 'app-developertoolslist',
  templateUrl: './developertoolslist.component.html',
  styleUrl: './developertoolslist.component.css'
})
export class DevelopertoolslistComponent {
  tool: string = '';
  toolsList: string[] = ['Visual Studio Code', 'Git', 'Docker'];

  addTool() {
    if (this.tool.trim()) {
      this.toolsList.push(this.tool.trim());
      this.tool = '';
    }
  }

}
