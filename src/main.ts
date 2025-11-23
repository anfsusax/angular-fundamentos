import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';
import { provideRouter, Route } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { ViewViva } from './app/view-viva/view-viva';

const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'view-viva', component: ViewViva }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
})
  .catch(err => console.error(err));
