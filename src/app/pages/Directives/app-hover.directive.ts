import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]',
  standalone: true
})
export class AppHoverDirective {

  constructor(private element:ElementRef, private renderer:Renderer2) { }


  @HostBinding('value') inputVal:string = 'Hi there!'
  @HostBinding('title') inputTitle:string = 'Hi ravi!'


  @HostListener('focus') onFocus(){
    this.inputVal = 'hello ravi'
  }

  @HostListener('blur') onBlur(){
    this.inputVal = 'hello turvi'
  }

//   @HostBinding('style.backgroundColor') backgroundColor:string = 'red'
// @HostBinding('style.color') color:string ='yellow'

// @HostListener('mouseenter') onMouserEnter(){
//   this.backgroundColor = 'yellow'
//   this.color = 'red'
// }
// @HostListener('mouseout') onMouserOut(){
//   this.backgroundColor = 'red'
//   this.color = 'yellow'
// }
}
