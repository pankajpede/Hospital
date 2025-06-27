import { Component } from '@angular/core';

@Component({
  selector: 'app-service-webdev',
  standalone: true,
  imports: [],
  templateUrl: './service-webdev.component.html',
  styleUrl: './service-webdev.component.scss'
})
export class ServiceWebdevComponent {

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
