import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  today = new Date();

  constructor() { }

  ngOnInit() {
  }

  asyncVar = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Hello, I am here!');
    }, 2000);
  });

}
