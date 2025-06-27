import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-e-commerce',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './e-commerce.component.html',
  styleUrl: './e-commerce.component.scss'
})
export class ECommerceComponent {

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
