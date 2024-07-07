import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlights]',
  standalone: true
})
export class HighlightsDirective {

  constructor(private element:ElementRef, private renderer:Renderer2) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.renderer.addClass(this.element.nativeElement, 'bg-primary-subtle')
  }

  @HostListener('mouseout') onMouseOut(){
    this.renderer.removeClass(this.element.nativeElement, 'bg-primary-subtle')
  }

}
