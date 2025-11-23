import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';
import { provideRouter, Route } from '@angular/router';
import { HomeComponent } from './app/components/home/home.component';
import { ViewVivaComponent } from './app/components/view-viva/view-viva.component';

const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'view-viva.component', component: ViewVivaComponent }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
})
  .catch(err => console.error(err));
