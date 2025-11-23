import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-input-output',
  standalone: true,
  imports: [CommonModule, ChildComponent],
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent {
  mensagem = 'Deus envia instruções ao Filho';
  respostaDoFilho = '';

  receberResposta(mensagem: string) {
    this.respostaDoFilho = mensagem;
  }
}
