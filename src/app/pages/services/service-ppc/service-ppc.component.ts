import { Component } from '@angular/core';

import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-service-ppc',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './service-ppc.component.html',
  styleUrl: './service-ppc.component.scss'
})
export class ServicePpcComponent {

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
