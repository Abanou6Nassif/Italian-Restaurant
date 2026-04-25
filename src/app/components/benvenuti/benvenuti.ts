import { Component, ElementRef, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { interval, Subscription } from 'rxjs';
@Component({
  selector: 'app-benvenuti',
  // imports: [],
  templateUrl: './benvenuti.html',
  styleUrl: './benvenuti.css',
})
export class Benvenuti implements OnInit, OnDestroy {
  currentIndex = signal(0);
  intervalId: any
  slides: string[] = ['/it/images/slider1.jpg', '/it/images/slider2.jpg', '/it/images/slider3.jpg']
  captions: string[] = ['Welcome!', 'Traditional Italian Cuisine', 'Selected Products']
  private subscribtion!: Subscription;
  private readonly host = inject(ElementRef<HTMLElement>);
  constructor() {

  }
  ngOnInit(): void {
    this.subscribtion = interval(3000).subscribe(() => this.next())
  }

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe()
  }


  next(): void {
    this.currentIndex.update(v => (v + 1) % this.slides.length)
    this.animateSlideTransition();
  }
  prev(): void {
    this.currentIndex.update(v => (v - 1 + this.slides.length) % this.slides.length)
    this.animateSlideTransition();
    // this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length

  }

  setExactImg(index: number) {
    this.currentIndex.update(v => index)
    this.animateSlideTransition();
  }

  private animateSlideTransition(): void {
    const image = this.host.nativeElement.querySelector('img');
    if (!image) {
      return;
    }

    image.getAnimations().forEach((animation: Animation) => animation.cancel());
    image.animate(
      [
        { opacity: 0.35 },
        { opacity: 1 },
      ],
      {
        duration: 450,
        easing: 'ease-out',
        fill: 'both',
      }
    );
  }
}
