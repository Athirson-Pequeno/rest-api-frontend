import { Component } from '@angular/core';
import { MaterialDesignModule } from '../shared/material-design/material-design.module';

@Component({
  selector: 'app-home',
  imports: [MaterialDesignModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
