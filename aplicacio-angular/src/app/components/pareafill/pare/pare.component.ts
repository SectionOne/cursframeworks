import { Component } from '@angular/core';
import { FillComponent } from '../fill/fill.component'; // Importa el component fill

@Component({
  selector: 'app-pare',
  standalone: true, // Marca el component com a standalone
  imports: [FillComponent], // Importa el component fill
  template: `
    <h1>Component Pare</h1>
    <app-fill [missatge]="missatgePare"></app-fill>
    <!-- Utilitza el component fill -->
  `,
  styleUrls: ['./pare.component.css'],
})
export class PareComponent {
  missatgePare = 'Aquest missatge ve del pare'; // Dades que es passen al fill
}
