import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
  color: string;

  constructor(private serviceService: ServiceService) {
    this.serviceService.colorUpdated.subscribe(
      (color: string) => {
        this.color = color;
      }
    );
  }

  ngOnInit() {
    this.color = this.serviceService.getColor();
  }


}
