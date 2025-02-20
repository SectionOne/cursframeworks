import { Component } from '@angular/core';

@Component({
  selector: 'app-user', // Selector que s'utilitzarà en les plantilles HTML
  templateUrl: './user.component.html', // Ruta a la plantilla HTML del component
  styleUrls: ['./user.component.css'], // Ruta als estils CSS del component
})
export class UserComponent {
  // Propietats del component
  userName: string = 'Joan';
  userAge: number = 30;

  // Mètodes del component
  greetUser(): string {
    return `Hola, ${this.userName}! Tens ${this.userAge} anys.`;
  }
}
