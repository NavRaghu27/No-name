import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styles: ''
})
export class AppComponent implements OnInit {
  title = 'project-app';

  message: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<{ message: string }>('http://localhost/api/message').subscribe(data => {
      this.message = data.message;
    });
  }
}
