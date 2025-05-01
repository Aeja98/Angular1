import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-result-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './result-box.component.html',
  styleUrls: ['./result-box.component.scss']
})

export class ResultBoxComponent {
  @Input() label: string = '';
  @Input() value: number | null = null;
  @Input() unit: string = '';
}
