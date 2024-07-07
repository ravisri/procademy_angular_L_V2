import { Component, ContentChild, ContentChildren, ElementRef, QueryList } from '@angular/core';

@Component({
  selector: 'app-ng-content',
  standalone: true,
  imports: [],
  templateUrl: './ng-content.component.html',
  styleUrl: './ng-content.component.scss'
})
export class NgContentComponent {
// @ContentChild('para') paraEl!:ElementRef;
@ContentChildren('para') paraEl!:QueryList<ElementRef>

StyleParagraph(){
  // let el = this.paraEl.nativeElement
  this.paraEl.forEach((m) =>{ console.log(m.nativeElement)} )
}

}
