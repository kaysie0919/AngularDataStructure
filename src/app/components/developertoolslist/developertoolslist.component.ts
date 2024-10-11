import { Component } from '@angular/core';
import { DevelopertoollistService } from '../services/developertoollist.service';
import { Tool } from '../interface/developertoollist';

@Component({
  selector: 'app-developertoolslist',
  templateUrl: './developertoolslist.component.html',
  styleUrls: ['./developertoolslist.component.css']
})
export class DevelopertoolslistComponent {
  toolName: string = '';
  toolsList: Tool[] = [];
  nextId: number = 1;

  constructor(private toolsService: DevelopertoollistService) {
    this.toolsList = this.toolsService.getToolsList();
  }

  addTool() {
    if (this.toolName.trim()) {
      const newTool: Tool = { id: this.nextId++, name: this.toolName.trim() };
      this.toolsService.addTool(newTool);
      this.updateToolsList();
      this.toolName = '';
    }
  }

  removeTool(id: number) {
    this.toolsService.removeTool(id);
    this.updateToolsList();
  }

  private updateToolsList() {
    this.toolsList = this.toolsService.getToolsList();
  }
}
