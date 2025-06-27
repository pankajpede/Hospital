import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-ai-tools-2024',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './ai-tools-2024.component.html',
  styleUrl: './ai-tools-2024.component.scss'
})
export class AiTools2024Component {

  ngOnInit() {
        window.scrollTo(0, 0);
      }
}
