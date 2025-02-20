import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fill',
  standalone: true, // Marca el component com a standalone
  template: `
    <h2>Component Fill</h2>
    <p>{{ missatge }}</p>
  `,
  styleUrls: ['./fill.component.css'],
})
export class FillComponent {
  @Input() missatge: string = ''; // Rep el missatge del pare
}
