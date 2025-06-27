import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-healthcare',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './healthcare.component.html',
  styleUrl: './healthcare.component.scss'
})
export class HealthcareComponent {

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
