import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'component-overview';
  options = [
    { name: 'walid', id: '1' },
    { name: 'nazim', id: '2' },
    { name: 'yacine', id: '3' },
    { name: 'samira', id: '4' },
  ];

}
