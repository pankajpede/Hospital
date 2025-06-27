import { Component } from '@angular/core';

import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.scss'
})
export class AboutusComponent {

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
