import { Component, ViewChild } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { ProdcutDetailsComponent } from '../input/prodcut-details/prodcut-details.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [InputComponent, ProdcutDetailsComponent, CommonModule],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent {

  // @ViewChild('productListComps') productListComp!:InputComponent

}
