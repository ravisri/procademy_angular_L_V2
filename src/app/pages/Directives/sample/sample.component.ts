import { Component } from '@angular/core';
import { SetBackgroundDirective } from '../set-background.directive';
import { HighlightsDirective } from '../highlights.directive';
import { AppHoverDirective } from '../app-hover.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sample',
  standalone: true,
  imports: [SetBackgroundDirective, HighlightsDirective, AppHoverDirective, CommonModule],
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.scss'
})
export class SampleComponent {
prod = {
  gender:'male',
  brand:'nike',
  category:'cloth'
}
}
