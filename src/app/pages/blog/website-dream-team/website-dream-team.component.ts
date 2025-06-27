import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-website-dream-team',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './website-dream-team.component.html',
  styleUrl: './website-dream-team.component.scss'
})
export class WebsiteDreamTeamComponent {

  ngOnInit() {
      window.scrollTo(0, 0);
    }
}
