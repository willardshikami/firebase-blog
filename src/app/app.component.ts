import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = [ 'Angular', 'React', 'Vue' ];

  userModel = new User('Tom', 'tom@tom.com', 5554, '', 'Morning', true);
}
