import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MaterialDesignModule } from './shared/material-design/material-design.module';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MaterialDesignModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'crud-angular';

  shouldRun = false;
  constructor(public router: Router) {}
  showNavSlide() {
    this.shouldRun = !this.shouldRun;
  }
}
