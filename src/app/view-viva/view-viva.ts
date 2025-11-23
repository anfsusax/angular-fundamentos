import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-view-viva',
  standalone: true,
  templateUrl: './view-viva.html',
  styleUrls: ['./view-viva.css']
})
export class ViewVivaComponent {
  // Estado reativo
  titulo = signal('No princípio, Deus criou os céus e a terra');

  // Função para alterar o estado
  mudarTitulo() {
    this.titulo.set('Haja luz! O HTML agora está vivo e reativo 🌟');
  }
}
