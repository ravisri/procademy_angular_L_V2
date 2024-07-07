import { Component, ElementRef, EventEmitter, Output, output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
searchText:string =''
@Output() searchTextChange:EventEmitter<string> = new EventEmitter<string>()

@ViewChild('searchInput') searchInputEl!:ElementRef

change(){
  this.searchText = this.searchInputEl.nativeElement.value;
  this.searchTextChange.emit(this.searchText)
  // console.log(inputEl.value)
  // inputEl
}
}
