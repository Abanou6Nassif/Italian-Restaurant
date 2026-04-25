import { AfterViewInit, Component, signal, ElementRef } from '@angular/core';
import AOS from 'aos';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Benvenuti } from './components/benvenuti/benvenuti';
import { Ristorante } from './components/ristorante/ristorante';
import { Menu } from './components/menu/menu';
import { Prenotazione } from './components/prenotazione/prenotazione';
import { DoveSiamo } from './components/dove-siamo/dove-siamo';

@Component({
  selector: 'app-root',
  imports: [Navbar, Footer, Benvenuti, Ristorante, Menu, Prenotazione, DoveSiamo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  // private intersectionObserver?: IntersectionObserver
  // activeNav?: string
  protected readonly title = signal('italian_restaurant');

  constructor(private elem:ElementRef){

  }
  ngAfterViewInit(): void {
    AOS.init();
    // AOS.init({
    //   duration: 1200,
    //   easing: 'ease',
    //   once: false,
    //   startEvent: 'DOMContentLoaded',
    // });

    // Ensure dynamically rendered children are discovered after first paint.
    // requestAnimationFrame(() => AOS.refreshHard());

    // Recompute offsets once all images and fonts are fully loaded.
    window.addEventListener('load', () => AOS.refreshHard(), { once: true });
    // this.activeLink();

  }
  // activeLink(): void {
  //   const sections: HTMLCollection = this.elem.nativeElement.parentElement.querySelectorAll('.navLink');
  //   console.table(sections);

  //   if (sections.length === 0) return
  //   this.intersectionObserver = new IntersectionObserver(entries => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         this.activeNav = entry.target.id
  //       }
  //     })
  //   })

  //   Array.from(sections).forEach(section => {
  //     this.intersectionObserver?.observe(section)
  //   })
  // }
}
