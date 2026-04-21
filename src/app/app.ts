import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Benvenuti } from './components/benvenuti/benvenuti';
import { Ristorante } from './components/ristorante/ristorante';
import { Menu } from './components/menu/menu';
import { Prenotazione } from './components/prenotazione/prenotazione';
import { DoveSiamo } from './components/dove-siamo/dove-siamo';

@Component({
  selector: 'app-root',
  imports: [Navbar,Footer,Benvenuti,Ristorante,Menu,Prenotazione,DoveSiamo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('italian_restaurant');
}
