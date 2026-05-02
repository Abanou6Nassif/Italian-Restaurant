import { Component } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-ristorante',
  imports: [],
  templateUrl: './ristorante.html',
  styleUrl: './ristorante.css',
})
export class Ristorante {
  constructor(private translateService: TranslationService) {}
  translate(word: string): string {
    return this.translateService.translate(word);
  }
}
