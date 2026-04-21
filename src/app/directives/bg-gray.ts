import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBgGray]',
})
export class BgGray {
  constructor(private elem:ElementRef) {

  }

  @HostListener('click') active(){
    Array.from(this.elem.nativeElement.parentElement.children).forEach((element:any) => {
      // element.children[0].style.backgroundColor='';
      // element.children[0].style.color='';
      element.querySelector('a').classList.remove('activelink');
    });
    // this.elem.nativeElement.parentElement.children.style.color='';
    // this.elem.nativeElement.children[0].style.backgroundColor = 'lightgray';
    // this.elem.nativeElement.children[0].style.color = 'rgba(0,0,0,9)';
     this.elem.nativeElement.querySelector('a').classList.add('activelink');
  }
}
