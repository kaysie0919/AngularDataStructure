import { Injectable } from '@angular/core';
import { Tool } from '../interface/toollist';

@Injectable({
  providedIn: 'root'
})
export class ToollistService {
  private tools: Tool[] = [];

  getTools(): Tool[] {
    return this.tools;
  }

  addTool(tool: Tool): void {
    this.tools.push(tool);
  }

  removeTool(id: number): void {
    this.tools = this.tools.filter(tool => tool.id !== id);
  }
}
