import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() mensagemDoPai!: string; // recebe do pai
  @Output() respostaParaPai = new EventEmitter<string>(); // envia para o pai

  enviarResposta() {
    this.respostaParaPai.emit('Filho recebeu a mensagem e responde com gratidão 🙏');
  }
}
