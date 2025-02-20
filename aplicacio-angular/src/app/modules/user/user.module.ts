import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../../components/user/user.component';

@NgModule({
  declarations: [], // Components dins aquest mòdul
  imports: [CommonModule, UserComponent], // Mòduls necessaris
  exports: [UserComponent], // Fa que UserComponent pugui ser usat a fora
})
export class UserModule {}
