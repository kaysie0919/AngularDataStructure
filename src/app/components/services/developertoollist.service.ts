import { Injectable } from '@angular/core';
import { Tool } from '../interface/developertoollist'

@Injectable({
  providedIn: 'root'
})
export class DevelopertoollistService {
  private toolsList: Tool[] = [];

  getToolsList(): Tool[] {
    return this.toolsList;
  }

  addTool(tool: Tool): void {
    this.toolsList.push(tool);
  }

  removeTool(id: number): void {
    this.toolsList = this.toolsList.filter(tool => tool.id !== id);
  }
}
