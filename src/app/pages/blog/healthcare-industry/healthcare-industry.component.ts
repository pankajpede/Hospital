import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-healthcare-industry',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './healthcare-industry.component.html',
  styleUrl: './healthcare-industry.component.scss'
})
export class HealthcareIndustryComponent {

  ngOnInit() {
      window.scrollTo(0, 0);
    }
}
