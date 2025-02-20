import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-component-a',
  standalone: true,
  imports: [FormsModule], // Importa FormsModule aquí
  template: `
    <h2>Component A</h2>
    <input [(ngModel)]="nouMissatge" placeholder="Escriu un missatge" />
    <button (click)="enviar()">Enviar</button>
  `,
  styleUrls: ['./component-a.component.css'],
})
export class ComponentA {
  nouMissatge: string = '';

  constructor(private dataService: DataService) {}

  enviar() {
    this.dataService.enviarMissatge(this.nouMissatge);
    this.nouMissatge = '';
  }
}
