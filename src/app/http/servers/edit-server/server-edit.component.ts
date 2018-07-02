import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServersService } from '../servers.service';
import { Server } from '../server';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from '../../auth/auth.guard';

@Component({
  selector: 'app-edit-server',
  templateUrl: './server-edit.component.html',
  styleUrls: ['./server-edit.component.scss']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: Server;
  serverName: string;

  constructor(private route: ActivatedRoute,
              private serversService: ServersService,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.server = this.serversService.getServer(params.id);
        this.serverName = this.server.name;
      }
    );
  }

  onUpdateServer() {
    this.server.name = this.serverName;
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.serverName !== this.server.name) {
      return confirm('Do you want to discard the changes?');
    } else {
      return true;
    }
  }

}
