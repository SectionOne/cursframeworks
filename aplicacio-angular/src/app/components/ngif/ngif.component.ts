import { Component } from '@angular/core';
import { NgIf } from '@angular/common'; // Importa NgIf

@Component({
  selector: 'app-ngif',
  template: `
    <p *ngIf="showMessage">Aquest missatge es mostra si showMessage és true.</p>
    <button (click)="toggleMessage()">Toggle Missatge</button>
  `,
  imports: [NgIf],
})
export class NgifComponent {
  showMessage = true;

  toggleMessage() {
    this.showMessage = !this.showMessage;
  }
}
