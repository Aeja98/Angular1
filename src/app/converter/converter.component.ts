import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.scss'
})
export class ConverterComponent {
  meters: number = 0;
  feetResult: number | null = null;

  celsius: number = 0;
  fahrenheitResult: number | null = null;

  convertToFeet(): void {
    this.feetResult = this.meters * 3.28084; // 1 meter = 3.28084 feet
  }

  convertToFahrenheit(): void {
    this.fahrenheitResult = (this.celsius * 9/5) + 32; // °C to °F formula
  }
}
