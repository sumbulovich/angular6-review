import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServersRoutingModule } from './servers-routing.module';
import { ServersComponent } from './servers.component';
import { EditServerComponent } from './edit-server/server-edit.component';
import { HttpService } from '../http.service';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { ServersService } from './servers.service';

@NgModule({
  declarations: [ ServersComponent, EditServerComponent ],
  imports: [
    CommonModule,
    ServersRoutingModule,
    FormsModule
  ],
  providers: [ ServersService, HttpService, AuthService ],
  exports: [ ServersComponent ] // makes ServersComponent accessible to AppModule
})
export class ServersModule { }
