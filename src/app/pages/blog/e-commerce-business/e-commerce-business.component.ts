import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-e-commerce-business',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './e-commerce-business.component.html',
  styleUrl: './e-commerce-business.component.scss'
})
export class ECommerceBusinessComponent {


  ngOnInit() {
      window.scrollTo(0, 0);
    }
}
