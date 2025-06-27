import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hospitality',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hospitality.component.html',
  styleUrl: './hospitality.component.scss'
})
export class HospitalityComponent {

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
