import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeService } from '../../services/home.service';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgComponentOutlet],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  homeService = inject(HomeService);
}
