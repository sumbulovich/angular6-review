import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Server } from './server';
import { Router } from '@angular/router';
import { ServersService } from './servers.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
})

export class ServersComponent implements OnInit {
  servers: Server[];
  serversSubscription: Subscription;
  @ViewChild('serverName') serverName: ElementRef;

  constructor( private serversService: ServersService, private router: Router ) {
  }

  ngOnInit() {
    this.serversSubscription = this.serversService.serversChanged.subscribe(
      (servers: Server[]) => {
        this.servers = servers;
      }
    );
  }

  private generateId() {
    return Math.round( Math.random() * 10000 );
  }

  onAddServer( name: string ) {
    this.serversService.addServer( new Server(name, 50, this.generateId()) );
    this.serverName.nativeElement.value = '';
  }


  onPostServers() {
    this.serversService.postServers();
  }

  onGetServers() {
    this.serversService.getServers();
  }

  isAuthenticated() {
    return this.serversService.isAuthenticated();
  }

  onDeleteServer(id: number) {
    this.serversService.deleteServer(id);
  }
}
