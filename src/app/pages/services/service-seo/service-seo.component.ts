import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-service-seo',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './service-seo.component.html',
  styleUrl: './service-seo.component.scss'
})
export class ServiceSeoComponent {
 
  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
