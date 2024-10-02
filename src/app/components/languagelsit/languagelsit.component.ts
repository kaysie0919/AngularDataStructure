import { Component } from '@angular/core';

@Component({
  selector: 'app-languagelsit',
  templateUrl: './languagelsit.component.html',
  styleUrl: './languagelsit.component.css'
})
export class LanguagelsitComponent {
  language: string = '';
  languageList: string[] = ['JavaScript', 'Python', 'Java'];

  addLanguage() {
    if (this.language.trim()) {
      this.languageList.push(this.language.trim());
      this.language = '';
    }
  }

}
