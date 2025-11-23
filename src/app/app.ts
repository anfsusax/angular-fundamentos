
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { provideRouter, Route } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ViewVivaComponent } from './components/view-viva/view-viva.component';

const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'view-viva', component: ViewVivaComponent }
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {}
