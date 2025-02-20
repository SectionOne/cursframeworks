import { Component, ViewChild } from '@angular/core';
import { FillComponent } from '../fill/fill.component'; // Importa el component fill

@Component({
  selector: 'app-pare-viewchild',
  standalone: true,
  imports: [FillComponent], // Importa el component fill
  template: `
    <h1>Component Pare</h1>
    <button (click)="canviarMissatgeFill()">Canvia el missatge del fill</button>
    <app-fill></app-fill>
    <!-- Utilitza el component fill -->
  `,
  styleUrls: ['./pare.component.css'],
})
export class PareComponentViewChild {
  @ViewChild(FillComponent) fillComponent!: FillComponent; // Accedeix al component fill

  canviarMissatgeFill() {
    this.fillComponent.canviaMissatge('Nou missatge des del pare!'); // Crida el mètode del fill
  }
}
