import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-gpt4o',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './gpt4o.component.html',
  styleUrl: './gpt4o.component.scss'
})
export class Gpt4oComponent {
  
ngOnInit() {
      window.scrollTo(0, 0);
    }
}
