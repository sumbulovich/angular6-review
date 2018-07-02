import { EventEmitter, Injectable } from '@angular/core';
import { Server } from './server';
import { Subject } from 'rxjs';
import { HttpService } from '../http.service';

@Injectable()
export class ServersService {
  servers: Server[] = [];
  serversChanged = new Subject<Server[]>();

  constructor(private httpService: HttpService) {}

  addServer(server: Server) {
    this.servers.push(server);
    this.serversChanged.next(this.servers.slice());
  }

  postServers() {
    this.httpService.postHttp( this.servers ).subscribe(
      ( response ) => console.log( response ),
      ( error ) => console.log( error )
    );
  }

  getServer(id: number) {
    return this.servers.find((server) => {
      return server.id === +id;
    });
  }

  deleteServer(id: number ) {
    const index = this.servers.findIndex((server) => {
      return server.id === +id;
    });
    this.servers.splice(index, 1);
    this.serversChanged.next(this.servers.slice());
  }

  getServers() {
    this.httpService.getHttp().subscribe(
      ( servers: Server[] ) => {
        this.servers = servers;
        this.serversChanged.next(this.servers.slice());
      },
      ( error ) => console.log( error )
    );
  }

  clearServers() {
    this.servers = [];
    this.serversChanged.next(this.servers.slice());
  }

  isAuthenticated() {
    return this.httpService.isAuthenticated();
  }
}
