import { Component } from '@angular/core';
import { ToollistService } from '../services/toollist.service';
import { Tool } from '../interface/toollist';

@Component({
  selector: 'app-toollist',
  templateUrl: './toollist.component.html',
  styleUrls: ['./toollist.component.css']
})
export class ToollistComponent {
  toolName: string = '';
  toolList: Tool[] = [];
  nextId: number = 4; // Initialize with the next available ID

  constructor(private toolService: ToollistService) {
    this.toolList = this.toolService.getTools();
    this.nextId = this.toolList.length > 0 ? Math.max(...this.toolList.map(tool => tool.id)) + 1 : 1;
  }

  addTool() {
    if (this.toolName.trim()) {
      const newTool: Tool = { id: this.nextId++, name: this.toolName.trim() };
      this.toolService.addTool(newTool);
      this.updateToolList();
      this.toolName = '';
    }
  }

  removeTool(id: number) {
    this.toolService.removeTool(id);
    this.updateToolList();
  }

  private updateToolList() {
    this.toolList = this.toolService.getTools();
  }
}
