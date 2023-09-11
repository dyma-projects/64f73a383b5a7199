import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]',
})
export class ColorDirective {
  private upColor = 'red';
  private downColor = 'green';
  private leftColor = 'orange';
  private rightColor = 'purple';

  constructor(private el: ElementRef<HTMLElement>) {}

  @HostListener('window:keyup', ['$event']) windowKeyUp($event: KeyboardEvent) {
    switch ($event.key) {
      case 'ArrowDown':
        this.el.nativeElement.style.color = this.downColor;
        break;
      case 'ArrowUp':
        this.el.nativeElement.style.color = this.upColor;
        break;
      case 'ArrowLeft':
        this.el.nativeElement.style.color = this.leftColor;
        break;
      case 'ArrowRight':
        this.el.nativeElement.style.color = this.rightColor;
        break;
    }
  }
}
