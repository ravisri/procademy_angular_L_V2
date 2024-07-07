import { Component, Input, OnInit } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { CommonModule } from '@angular/common';
import { Products} from '../../../product'
import { FilterComponent } from './filter/filter.component';
import { SearchComponent } from './search/search.component';
import { ProdcutDetailsComponent } from './prodcut-details/prodcut-details.component';



@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ChildComponent, CommonModule, FilterComponent,SearchComponent, ProdcutDetailsComponent],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent{

  product:any = Products;

  selectProduct:any;

  searchText:string = ''
  
  selectedRadioBtn:string ='all'
  changeRadio(val:string){
 const selectRadio = this.selectedRadioBtn = val;
    console.log(selectRadio)
  }


  setSearchText(val:string){
this.searchText = val;
  }

}
