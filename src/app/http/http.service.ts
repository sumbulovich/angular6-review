import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Server } from './servers/server';
import { AuthService } from './auth/auth.service';
import { catchError, map } from 'rxjs/internal/operators';

@Injectable()
export class HttpService {

  constructor( private http: HttpClient, private authService: AuthService ) {
  }

  postHttp( servers: Server[] ) {
    const token = this.authService.token;
    // return this.http.post('https://sumbul-ng-http.firebaseio.com/data.json', servers); // Append
    return this.http.put( 'https://sumbul-ng-http.firebaseio.com/data.json?auth=' + token, servers ); // Overwrite existing data
  }

  getHttp() {
    const token = this.authService.token;
    return this.http.get( 'https://sumbul-ng-http.firebaseio.com/data.json?auth=' + token ) // ...?auth=' + token for user authentication
               .pipe(
                 map(
                 ( servers: Server[] ) => {
                   for ( const server of servers ) {
                     server.name = 'FETCHED_' + server.name;
                   }
                   return servers;
                 }
               ),
               catchError(
                 ( error: HttpErrorResponse ) => {
                   return throwError( error );
                 }
               )
             );
  }

  getAppName() {
    return this.http.get( 'https://sumbul-ng-http.firebaseio.com/appName.json' );
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

}
