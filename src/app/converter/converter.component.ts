import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ResultBoxComponent } from './result-box/result-box.component';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [FormsModule, CommonModule, ResultBoxComponent],
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']

})
export class ConverterComponent {
  convertFeetMode: boolean = true;
  meters: number = 0;
  feetResult: number | null = null;

  convertTempMode: boolean = true;
  celsius: number = 0;
  fahrenheitResult: number | null = null;

  convertMeasurementMode: boolean = true;
  centimeters: number = 0;
  inchesResult: number | null = null;

  convertDistance(): void {
    if (this.convertFeetMode) {
      this.feetResult = this.meters * 3.28084; // ft = m * 3.28084
    } else {
      this.feetResult = this.meters / 3.28084; // m = ft/3.28084
    }
  }

  convertTemperature(): void {
    if (this.convertTempMode) {
      this.fahrenheitResult = (this.celsius * 9/5) + 32; // F = (C * 9/5) +32
    } else {
      this.fahrenheitResult = (this.celsius - 32) * 5/9; // C = (F - 32) * 5/9
    }
  }

  convertMeasurement(): void {
    if (this.convertMeasurementMode) {
      this.inchesResult = this.centimeters / 2.54; // in = cm/2.54
    } else {
      this.inchesResult = this.centimeters * 2.54; // cm = in * 2.54
    }
  }
}
