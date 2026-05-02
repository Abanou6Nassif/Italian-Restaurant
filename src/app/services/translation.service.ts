import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';

interface ITranslation {
  [key: string]: string;
}

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private readonly http = inject(HttpClient);
  private readonly translations = signal<ITranslation>({});
  private readonly englishTranslations = signal<ITranslation>({}); // To load the english first
  private readonly currentLang = signal<string>('en');

  constructor() {
    // this.loadEnglishTranslations();
    this.loadTranslation('en')
  }

  // private loadEnglishTranslations(): void {
  //   this.http.get<ITranslation>('assets/i18n/en.json').subscribe({
  //     next: (data: ITranslation) => {
  //       this.englishTranslations.set(data);
  //     },
  //   });
  // }

  loadTranslation(lang: string): void {
    this.http.get<ITranslation>(`assets/i18n/${lang}.json`).subscribe({
      next: (data: ITranslation) => {
        this.translations.set(data);
        this.currentLang.set(lang);
        // if (lang === 'en') {
        //   this.englishTranslations.set(data);
        // }
      },
    });
  }

  get currentLanguage(): string {
    return this.currentLang();
  }
  get translation(): ITranslation {
    return this.translations();
  }

  // Expose the translations signal so consumers can create reactive effects
  // based on translation changes.
  // get translationsSignal() {
  //   return this.translations;
  // }

  setCurrentLang(lang: string): void {
    this.loadTranslation(lang);
  }

  translate(word: string): string {
    return this.translations()[word] ?? this.englishTranslations()[word] ?? word;
  }
}
