import { Component } from '@angular/core';

@Component({
  selector: 'app-fill',
  standalone: true,
  template: `
    <h2>Component Fill</h2>
    <p>{{ missatge }}</p>
  `,
  styleUrls: ['./fill.component.css'],
})
export class FillComponent {
  missatge: string = 'Missatge inicial del fill';

  canviaMissatge(nouMissatge: string) {
    this.missatge = nouMissatge; // Canvia el missatge
  }
}
