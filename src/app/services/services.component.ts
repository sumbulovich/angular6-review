import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';

@Component( {
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: [ './services.component.scss' ]
} )
export class ServicesComponent implements OnInit {
  color: string;

  constructor( private serviceService: ServiceService ) {
  }

  ngOnInit() {
    this.color = this.serviceService.getColor();
  }

  colorUpdate() {
    this.serviceService.setColor( this.color );
    this.serviceService.colorUpdated.emit( this.color );
  }

}
