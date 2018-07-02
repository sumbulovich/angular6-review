import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component( {
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: [ './http.component.scss' ],
} )
export class HttpComponent {
  appName = this.httpService.getAppName();

  constructor( private httpService: HttpService ) {
  }

}
