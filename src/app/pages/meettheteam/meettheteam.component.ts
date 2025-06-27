import { Component } from '@angular/core';

@Component({
  selector: 'app-meettheteam',
  standalone: true,
  imports: [],
  templateUrl: './meettheteam.component.html',
  styleUrl: './meettheteam.component.scss'
})
export class MeettheteamComponent {

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
