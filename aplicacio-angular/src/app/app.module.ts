import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserModule } from './modules/user/user.module'; // Import del mòdul
import { FormsModule } from '@angular/forms'; // Importem FormsModule

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UserModule, FormsModule], // Afegim el nou mòdul
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
