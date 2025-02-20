import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserModule } from './modules/user/user.module'; // Import del mòdul

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, UserModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'aplicacio-angular';
}
