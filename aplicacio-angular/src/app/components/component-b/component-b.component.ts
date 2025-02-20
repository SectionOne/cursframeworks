import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'; // Importa el servei

@Component({
  selector: 'app-component-b',
  standalone: true,
  template: `
    <h2>Component B</h2>
    <p>Missatge rebut: {{ missatgeRebut }}</p>
  `,
  styleUrls: ['./component-b.component.css'],
})
export class ComponentB implements OnInit {
  missatgeRebut: string = ''; // Variable per guardar el missatge rebut

  constructor(private dataService: DataService) {} // Injecta el servei

  ngOnInit() {
    this.dataService.missatge$.subscribe((missatge) => {
      this.missatgeRebut = missatge; // Subscriu-te als canvis del missatge
    });
  }
}
