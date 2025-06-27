import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-industrial-marketing-power',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './industrial-marketing-power.component.html',
  styleUrl: './industrial-marketing-power.component.scss'
})
export class IndustrialMarketingPowerComponent {

  ngOnInit() {
      window.scrollTo(0, 0);
    }
}
