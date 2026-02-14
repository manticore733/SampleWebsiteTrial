import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-love-letter-component',
  imports: [CommonModule],
  templateUrl: './love-letter-component.html',
  styleUrls: ['./love-letter-component.css']  // ← CORRECT

})
export class LoveLetterComponent implements AfterViewInit, OnDestroy {
  @ViewChild('letterSection', { static: false }) letterSection!: ElementRef;

  private destroy$ = new Subject<void>();
  private observer!: IntersectionObserver;
  displayedText = '';
  isTyping = false;
  isVisible = false;

  private readonly letterText = `My Dearest Love,

Every moment with you feels like a beautiful dream I never want to wake up from. You are my sunshine on cloudy days, my calm in every storm, and the reason my heart beats with such joy.

From the way you laugh to the way you care — everything about you makes my world more beautiful. I fall deeper in love with you every single day.

Thank you for being you. Thank you for choosing me. Thank you for making life the most wonderful adventure.

Forever and always yours,
With all my love 💕`;

  // ngAfterViewInit() {
  //   this.setupIntersectionObserver();
  // }
  ngAfterViewInit() {
  // Start typewriter immediately (no scroll wait)
  setTimeout(() => this.startTypewriter(), 300);
}


  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    if (this.observer) this.observer.disconnect();
  }

  private setupIntersectionObserver() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !this.isTyping) {
          this.isVisible = true;
          this.startTypewriter();
        }
      });
    }, { 
      threshold: 0.1,
      rootMargin: '-100px 0px 0px 0px'
    });

    this.observer.observe(this.letterSection.nativeElement);
  }

  private startTypewriter() {
    this.isTyping = true;
    let index = 0;
    const interval = setInterval(() => {
      this.displayedText = this.letterText.slice(0, index + 1);
      index++;
      if (index >= this.letterText.length) {
        clearInterval(interval);
        this.isTyping = false;
      }
    }, 30);
  }

}
