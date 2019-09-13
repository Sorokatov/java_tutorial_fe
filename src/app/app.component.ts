import {Component, OnInit} from '@angular/core';
import {RestApiService} from "./services/rest-api.service";
import {Customer} from "./models/customer";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {

  }
}
