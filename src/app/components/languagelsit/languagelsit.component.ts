import { Component } from '@angular/core';
import { LanguagelistService } from '../services/languagelist.service';
import { Language } from '../interface/languagelist';

@Component({
  selector: 'app-languagelsit',
  templateUrl: './languagelsit.component.html',
  styleUrls: ['./languagelsit.component.css']
})
export class LanguagelsitComponent {
  languageName: string = '';
  languageList: Language[] = [];
  nextId: number = 1;

  constructor(private languageService: LanguagelistService) {
    this.languageList = this.languageService.getLanguages();
    this.nextId = this.languageList.length > 0 ? Math.max(...this.languageList.map(language => language.id)) + 1 : 1;
  }

  addLanguage() {
    if (this.languageName.trim()) {
      const newLanguage: Language = { id: this.nextId++, name: this.languageName.trim() };
      this.languageService.addLanguage(newLanguage);
      this.updateLanguageList();
      this.languageName = '';
    }
  }

  removeLanguage(id: number) {
    this.languageService.removeLanguage(id);
    this.updateLanguageList();
  }

  private updateLanguageList() {
    this.languageList = this.languageService.getLanguages();
  }
}
