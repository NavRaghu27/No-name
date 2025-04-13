import { HttpClient } from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styles: ''
})
export class AppComponent implements OnInit {
  title = 'project-app';

  message: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
  }
}
