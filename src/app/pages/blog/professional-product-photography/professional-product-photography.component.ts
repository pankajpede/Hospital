import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-professional-product-photography',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './professional-product-photography.component.html',
  styleUrl: './professional-product-photography.component.scss'
})
export class ProfessionalProductPhotographyComponent {

  ngOnInit() {
      window.scrollTo(0, 0);
    }
}
