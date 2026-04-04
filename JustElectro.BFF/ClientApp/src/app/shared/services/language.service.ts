import { Injectable, signal, effect } from '@angular/core';

export type Language = 'ro' | 'en';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly STORAGE_KEY = 'JustElectro_lang';

  currentLang = signal<Language>(this.getInitialLang());

  constructor() {
    effect(() => {
      localStorage.setItem(this.STORAGE_KEY, this.currentLang());
      document.documentElement.setAttribute('lang', this.currentLang());
    });
  }

  switchTo(lang: Language): void {
    this.currentLang.set(lang);
  }

  toggle(): void {
    this.currentLang.set(this.currentLang() === 'ro' ? 'en' : 'ro');
  }

  private getInitialLang(): Language {
    const saved = localStorage.getItem(this.STORAGE_KEY) as Language;
    if (saved === 'ro' || saved === 'en') return saved;
    const browser = navigator.language.toLowerCase();
    return browser.startsWith('ro') ? 'ro' : 'en';
  }
}
