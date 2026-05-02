import { Component } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-prenotazione',
  imports: [],
  templateUrl: './prenotazione.html',
  styleUrl: './prenotazione.css',
})
export class Prenotazione {
  constructor(private translateService: TranslationService) {}
  translate(word: string): string {
    return this.translateService.translate(word);
  }
}
