import { Component, ElementRef } from '@angular/core';
import { RouterLink } from "@angular/router";
import {BgGray} from '../../directives/bg-gray'

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,BgGray],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  constructor(private elem:ElementRef){

  }

  toggleMenu(){
    const rootElement: HTMLElement = this.elem.nativeElement;
    const navbarText = rootElement.querySelector<HTMLElement>('#navbarText');
    navbarText?.classList.toggle('show');
  }
}
