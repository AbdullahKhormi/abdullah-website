import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit {
  @Input() animationClass = 'fade-up';
  @Input() delay = '0s';
  @Input() duration = '0.6s';
  @Input() repeat = true; // لو تبغى يعيد نفسه

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
    this.renderer.setStyle(this.el.nativeElement, 'transition', `all ${this.duration} ease ${this.delay}`);

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.renderer.addClass(this.el.nativeElement, this.animationClass);
            this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
          } else if (this.repeat) {
            this.renderer.removeClass(this.el.nativeElement, this.animationClass);
            this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
          }
        });
      },
      {
        threshold: 0.1 // يتحسس لما 10% من العنصر يدخل الشاشة
      }
    );

    observer.observe(this.el.nativeElement);
  }
}
