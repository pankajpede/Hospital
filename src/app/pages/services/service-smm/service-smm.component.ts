import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-service-smm',
  standalone: true,
    imports: [RouterLink],
  templateUrl: './service-smm.component.html',
  styleUrl: './service-smm.component.scss'
})
export class ServiceSmmComponent {

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
