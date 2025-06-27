import { Component } from '@angular/core';

@Component({
  selector: 'app-ourjourney',
  standalone: true,
  imports: [],
  templateUrl: './ourjourney.component.html',
  styleUrl: './ourjourney.component.scss'
})
export class OurjourneyComponent {

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
