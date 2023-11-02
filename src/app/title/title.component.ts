import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent {
  @Input() showBackButton = false;

  constructor(private router: Router) { }

  goBack() {
    this.router.navigate(['/']);
  }
  faBars = faBars;
}
