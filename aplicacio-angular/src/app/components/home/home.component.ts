import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [HttpClientModule, CommonModule], // Importa HttpClientModule aquí
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [ApiService], // Elimina aquesta línia (no és necessària)
})
export class HomeComponent implements OnInit {
  posts: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getPosts().subscribe((data: any[]) => {
      this.posts = data;
    });
  }
}
