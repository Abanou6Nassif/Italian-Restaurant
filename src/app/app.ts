import { AfterViewInit, Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Benvenuti } from './components/benvenuti/benvenuti';
import { Ristorante } from './components/ristorante/ristorante';
import { Menu } from './components/menu/menu';
import { Prenotazione } from './components/prenotazione/prenotazione';
import { DoveSiamo } from './components/dove-siamo/dove-siamo';
import Aos from 'aos';

@Component({
  selector: 'app-root',
  imports: [Navbar, Footer, Benvenuti, Ristorante, Menu, Prenotazione, DoveSiamo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  protected readonly title = signal('italian_restaurant');

  ngAfterViewInit(): void {
    Aos.init();
    // Aos.init({
    //   duration: 1200,
    //   easing: 'ease',
    //   once: false,
    //   startEvent: 'DOMContentLoaded',
    // });

    // Ensure dynamically rendered children are discovered after first paint.
    // requestAnimationFrame(() => Aos.refreshHard());

    // Recompute offsets once all images and fonts are fully loaded.
    window.addEventListener('load', () => Aos.refreshHard(), { once: true });
  }
}
