import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-service-analytics',
  standalone: true,
  imports: [],
  templateUrl: './service-analytics.component.html',
  styleUrl: './service-analytics.component.scss'
})
export class ServiceAnalyticsComponent {

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
