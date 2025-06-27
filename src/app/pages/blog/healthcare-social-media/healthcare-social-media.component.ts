import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-healthcare-social-media',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './healthcare-social-media.component.html',
  styleUrl: './healthcare-social-media.component.scss'
})
export class HealthcareSocialMediaComponent {

  ngOnInit() {
      window.scrollTo(0, 0);
    }
}
