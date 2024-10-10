import { Injectable } from '@angular/core';
import { Language } from '../interface/languagelist';

@Injectable({
  providedIn: 'root'
})
export class LanguagelistService {
  private languages: Language[] = [];

  getLanguages(): Language[] {
    return this.languages;
  }

  addLanguage(language: Language): void {
    this.languages.push(language);
  }

  removeLanguage(id: number): void {
    this.languages = this.languages.filter(language => language.id !== id);
  }
}
