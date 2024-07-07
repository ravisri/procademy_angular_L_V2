import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[setBackground]',
  standalone: true
})
export class SetBackgroundDirective implements OnInit{

  @Input('setBackground') backColor:string = 'green'
  @Input() color:string = 'white'
  @Input() title:string = 'This is set background directive';

  constructor(private element:ElementRef, private renderer:Renderer2) {
    
   }

   ngOnInit(): void {
    // this.element.nativeElement.style.background ='red'
    // this.element.nativeElement.style.color ='white'
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.backColor)
    this.renderer.setStyle(this.element.nativeElement, 'color', this.color)
    this.renderer.setStyle(this.element.nativeElement, 'padding', '.5rem 1rem')
    // this.renderer.setAttribute(this.element.nativeElement, 'title','Hello Ravi')
   }

}
