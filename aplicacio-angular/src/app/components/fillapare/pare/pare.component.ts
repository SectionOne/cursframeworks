import { Component } from '@angular/core';
import { FillComponent } from '../fill/fill.component'; // Importa el component fill

@Component({
  selector: 'app-fillpare',
  standalone: true, // Marca el component com a standalone
  imports: [FillComponent], // Importa el component fill
  template: `
    <h1>Component Pare</h1>
    <p>{{ missatgeRebut }}</p>
    <app-fill (missatgeEnviat)="rebreMissatge($event)"></app-fill>
    <!-- Escolta l'esdeveniment -->
  `,
  styleUrls: ['./pare.component.css'],
})
export class FillaPareComponent {
  missatgeRebut: string = ''; // Variable per guardar el missatge rebut

  rebreMissatge(missatge: string) {
    this.missatgeRebut = missatge; // Actualitza el missatge rebut
  }
}
