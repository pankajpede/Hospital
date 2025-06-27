import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-real-estate',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './real-estate.component.html',
  styleUrl: './real-estate.component.scss'
})
export class RealEstateComponent {

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
