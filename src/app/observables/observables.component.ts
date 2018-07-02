import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, pipe, throwError } from 'rxjs';
import { Observer } from 'rxjs';
import { Subscription } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit, OnDestroy {
  interval: number;
  handle: string;
  data: string;
  subscription1: Subscription;
  subscription2: Subscription;
  subscription3: Subscription;

  constructor(private serviceService: ServiceService) {
  }

  ngOnInit() {
    const timer = interval(1000).pipe(
      map(
      (second: number) => {
        return second * 2;
      }),
      catchError(error => {
        return throwError('Something went wrong!');
      })
    );

    this.subscription1 = timer.subscribe(
      (second: number) => {
        this.interval = second;
      }
    );

    const observable = Observable.create((observer: Observer<any>) => {
      setTimeout(() => {
        observer.next('Handle Data');
      }, 2000);
      setTimeout(() => {
        observer.next('Handle Data 2');
      }, 4000);
      setTimeout(() => {
        observer.next('Handle Data 3');
      }, 6000);
      setTimeout(() => {
        observer.error('Handle Error');
      }, 8000);
      setTimeout(() => {
        observer.next('This does not be shown after error');
      }, 10000);
      setTimeout(() => {
        observer.complete();
      }, 12000);
      setTimeout(() => {
        observer.next('This does not be shown after completed');
      }, 14000);
    });

    setTimeout(() => {
      this.serviceService.colorUpdated2.next( 'Observer to pass and listen data' );
    }, 3000);

    this.subscription2 = observable.subscribe(
      (data: string) => this.handle = data,
      (error: string) => this.handle = error,
      (completed: string) => this.handle = 'Handle completed'
    );

    this.subscription3 = this.serviceService.colorUpdated2.subscribe(
      (data: string) => this.data = data
    );
  }

  ngOnDestroy() {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
    this.subscription3.unsubscribe();
  }

}
