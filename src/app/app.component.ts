import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SiteAlexComponent} from './site-alex/site-alex.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SiteAlexComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio_alex';
}
