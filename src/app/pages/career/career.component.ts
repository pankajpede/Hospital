import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-career',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss'
})
export class CareerComponent {

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
