
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { provideRouter, Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewViva } from './view-viva/view-viva';

const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'view-viva', component: ViewViva }
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>` 
})
export class AppComponent {}
