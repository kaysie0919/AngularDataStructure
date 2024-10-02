import { Component } from '@angular/core';

@Component({
  selector: 'app-toollist',
  templateUrl: './toollist.component.html',
  styleUrl: './toollist.component.css'
})
export class ToollistComponent {
  tool: string = '';
  toolList: string[] = ['Hammer', 'Screwdriver', 'Wrench'];

  addTool() {
    if (this.tool.trim()) {
      this.toolList.push(this.tool.trim());
      this.tool = '';
    }
  }

}
