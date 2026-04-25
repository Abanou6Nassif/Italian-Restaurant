import { Directive, ElementRef, HostListener, OnChanges, Input } from '@angular/core';

@Directive({
  selector: '[appBgGray]',
})
export class BgGray implements OnChanges {
  @Input() condition: boolean = true
  constructor(private elem: ElementRef) {

  }
  ngOnChanges(): void {


    if (this.condition) {
      Array.from(this.elem.nativeElement.parentElement.children).forEach((element: any) => {
        element.querySelector('a').classList.remove('activelink');
      });
      this.elem.nativeElement.querySelector('a').classList.add('activelink');
    }
  }


  @HostListener('click') active() {
    Array.from(this.elem.nativeElement.parentElement.children).forEach((element: any) => {
      element.querySelector('a').classList.remove('activelink');
    });
    this.elem.nativeElement.querySelector('a').classList.add('activelink');
  }
}
