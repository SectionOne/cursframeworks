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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'aplicacio-angular';
}
