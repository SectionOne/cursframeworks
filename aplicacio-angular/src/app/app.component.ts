import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserModule } from './modules/user/user.module'; // Import del mòdul
import { PareComponent } from './components/pareafill/pare/pare.component';
import { FillaPareComponent } from './components/fillapare/pare/pare.component';
import { ComponentA } from './components/component-a/component-a.component'; // Importa ComponentA
import { ComponentB } from './components/component-b/component-b.component'; // Importa ComponentB
import { PareComponentViewChild } from './components/viewchild/pare/pare.component'; // Importa el component pare
import { NgifComponent } from './components/ngif/ngif.component';
import { NgStyleComponent } from './components/ngstyle/ngstyle.component';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

// Definim una interfície per al model de dades
interface Usuari {
  nom: string;
  edat: number;
  actiu: boolean;
}

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HomeComponent,
    UserModule,
    PareComponent,
    FillaPareComponent,
    ComponentA,
    ComponentB,
    PareComponentViewChild,
    NgifComponent,
    NgStyleComponent,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // Definim propietats amb tipus
  title = 'aplicacio-angular';
  titol: string = 'Data Binding en Angular';
  usuari: Usuari = { nom: 'Pere', edat: 30, actiu: true };
  missatge: string = '';

  // Mètode per gestionar un esdeveniment
  actualitzarNom(nouNom: string): void {
    this.usuari.nom = nouNom;
    this.missatge = `Nom actualitzat a: ${nouNom}`;
  }

  // Mètode per alternar l'estat actiu
  alternarActiu(): void {
    this.usuari.actiu = !this.usuari.actiu;
  }
}
