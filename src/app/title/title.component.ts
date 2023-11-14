import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent {
  // Injecting the Router into the constructor for route navigation
  constructor(private router: Router) { }

  // Icon for the navigation bar toggle button
  faBars = faBars;
}
