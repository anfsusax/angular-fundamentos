import { Injectable, signal } from '@angular/core';
import { ViewVivaComponent } from '../components/view-viva/view-viva.component';
import { InputOutputComponent } from '../components/input-output/input-output.component';

export interface HomeItem {
  label: string;
  component: any;
}

@Injectable({ providedIn: 'root' })
export class HomeService {
  // Lista de itens disponíveis
  itens: HomeItem[] = [
    { label: 'View Viva (signal)', component: ViewVivaComponent },
    { label: 'Input / Output', component: InputOutputComponent }
    // outros componentes depois
  ];

  // Estado reativo do item selecionado
  selecionado = signal<HomeItem>(this.itens[0]);

  // Método para alterar o item selecionado
  selecionar(item: HomeItem) {
    this.selecionado.set(item);
  }
}
