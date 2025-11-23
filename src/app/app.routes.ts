import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'view-viva',
    loadComponent: () =>
      import('./components/view-viva/view-viva.component')
        .then(m => m.ViewVivaComponent)
  },
  {
    path: 'input-output',
    loadComponent: () =>
      import('./components/input-output/input-output.component')
        .then(m => m.InputOutputComponent)
  },
  // aqui vão entrando os próximos fundamentos...
  {
    path: '**',
    redirectTo: ''
  }
];
