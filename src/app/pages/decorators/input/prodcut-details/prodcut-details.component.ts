import { Component, Input, OnInit } from '@angular/core';
import { InputComponent } from '../input.component';

@Component({
  selector: 'app-prodcut-details',
  standalone: true,
  imports: [],
  templateUrl: './prodcut-details.component.html',
  styleUrl: './prodcut-details.component.scss'
})
export class ProdcutDetailsComponent implements OnInit{

  
  product:any;
  
  @Input() productListComp!:InputComponent 
  ngOnInit(): void {
    this.product = this.productListComp.selectProduct
  }
}
