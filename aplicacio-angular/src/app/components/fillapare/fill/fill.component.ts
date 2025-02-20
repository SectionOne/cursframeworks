import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fill',
  standalone: true, // Marca el component com a standalone
  template: `
    <button (click)="enviarMissatge()">Enviar missatge al pare</button>
  `,
  styleUrls: ['./fill.component.css'],
})
export class FillComponent {
  @Output() missatgeEnviat = new EventEmitter<string>(); // Defineix l'EventEmitter

  enviarMissatge() {
    this.missatgeEnviat.emit('Hola, pare! Aquest missatge ve del fill.'); // Emet el missatge
  }
}
