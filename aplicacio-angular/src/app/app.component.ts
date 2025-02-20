import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserModule } from './modules/user/user.module'; // Import del mòdul
import { PareComponent } from './components/pareafill/pare/pare.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, UserModule, PareComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'aplicacio-angular';
}
