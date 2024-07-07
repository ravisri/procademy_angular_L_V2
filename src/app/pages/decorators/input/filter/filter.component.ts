import { Component, ElementRef, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule, SearchComponent],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {

  @Input()
  searchText:string = ''
  
@Input() all:number = 10
@Input() instock:number= 0;
@Input() outstock:number= 0;

@Output()
selectFilterRadioBtnChanged:EventEmitter<string> = new EventEmitter<string>()

// @ViewChildren('radioRef') selectedFilterRadioBtn?:QueryList<ElementRef>

selectedFilterRadioBtn:string = 'instock'

change(){
  // this.selectedFilterRadioBtn?.forEach((m) = m.ElementRef)
  this.selectFilterRadioBtnChanged.emit(this.selectedFilterRadioBtn)
}


}
