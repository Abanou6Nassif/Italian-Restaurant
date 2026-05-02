import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BgGray } from '../../directives/bg-gray';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, BgGray],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements AfterViewInit, OnInit {
  private intersectionObserver?: IntersectionObserver;
  activeNav?: string;
  constructor(
    private elem: ElementRef,
    private translateService: TranslationService,
  ) {}
  ngOnInit(): void {
    this.changeLang();
  }
  ngAfterViewInit(): void {
    this.activeLink();
    this.setupLinkClickHandler();
  }

  toggleMenu() {
    const rootElement: HTMLElement = this.elem.nativeElement;

    const navbarText = rootElement.querySelector<HTMLElement>('#navbarText');
    navbarText?.classList.toggle('show');
  }

  private setupLinkClickHandler(): void {
    const rootElement: HTMLElement = this.elem.nativeElement;
    const links = rootElement.querySelectorAll('a[fragment]');
    links.forEach((link) => {
      link.addEventListener('click', () => this.closeMenu());
    });
  }

  private closeMenu(): void {
    const rootElement: HTMLElement = this.elem.nativeElement;
    const navbarText = rootElement.querySelector<HTMLElement>('#navbarText');
    navbarText?.classList.remove('show');
  }

  activeLink(): void {
    const sections: HTMLCollection =
      this.elem.nativeElement.parentElement.querySelectorAll('.navLink');
    console.table(sections);

    if (sections.length === 0) return;
    this.intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.activeNav = entry.target.id;
        }
      });
    });

    Array.from(sections).forEach((section) => {
      this.intersectionObserver?.observe(section);
    });
  }

  changeLang() {
    const anchorTags = this.elem.nativeElement.querySelectorAll('a.language');
    anchorTags.forEach((link: HTMLAnchorElement) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const lang: string | undefined = link
          .getAttribute('rel')
          ?.split('-')[0]
          .toLocaleLowerCase();
        if (lang) {
          this.translateService.loadTranslation(lang);
        }
      });
    });
  }

  translate(word: string): string {
    return this.translateService.translate(word);
  }
}
