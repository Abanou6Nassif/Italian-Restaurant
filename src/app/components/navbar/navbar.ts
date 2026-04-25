import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { RouterLink } from "@angular/router";
import { BgGray } from '../../directives/bg-gray'

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, BgGray],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements AfterViewInit{
  private intersectionObserver?: IntersectionObserver
  activeNav?: string
  constructor(private elem: ElementRef) {

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
    links.forEach(link => {
      link.addEventListener('click', () => this.closeMenu());
    });
  }

  private closeMenu(): void {
    const rootElement: HTMLElement = this.elem.nativeElement;
    const navbarText = rootElement.querySelector<HTMLElement>('#navbarText');
    navbarText?.classList.remove('show');
  }

  activeLink():void {
    const sections:HTMLCollection = this.elem.nativeElement.parentElement.querySelectorAll('.navLink');
    console.table(sections);

    if (sections.length === 0) return
    this.intersectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.activeNav = entry.target.id
        }
      })
    })

    Array.from(sections).forEach(section=>{
      this.intersectionObserver?.observe(section)
    })
  }


}
