import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-service-content-marketing',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './service-content-marketing.component.html',
  styleUrl: './service-content-marketing.component.scss'
})
export class ServiceContentMarketingComponent {

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
