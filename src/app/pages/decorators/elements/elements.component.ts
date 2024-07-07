import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgContentComponent } from './ng-content/ng-content.component';

@Component({
  selector: 'app-elements',
  standalone: true,
  imports: [CommonModule, NgContentComponent],
  templateUrl: './elements.component.html',
  styleUrl: './elements.component.scss'
})
export class ElementsComponent {

  show:boolean = false;

  toggle:boolean = false;

  onToggle(){
    this.toggle = !this.toggle
  }
}
