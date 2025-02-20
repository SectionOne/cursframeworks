import { Component } from '@angular/core';
import { NgStyle } from '@angular/common'; // Importa NgStyle

@Component({
  selector: 'app-ngstyle',
  template: `
    <div [ngStyle]="{ 'background-color': bgColor }">
      Aquest div canvia de color de fons.
    </div>
    <button (click)="changeColor('red')">Vermell</button>
    <button (click)="changeColor('blue')">Blau</button>
  `,
  imports: [NgStyle],
})
export class NgStyleComponent {
  bgColor = 'yellow';

  changeColor(color: string) {
    this.bgColor = color;
  }
}
