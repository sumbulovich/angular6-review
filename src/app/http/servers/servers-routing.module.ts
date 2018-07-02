import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditServerComponent } from './edit-server/server-edit.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: 'servers', canActivateChild: [ AuthGuard ], children: [
    {path: ':id', component: EditServerComponent, outlet: 'edit', canDeactivate: [AuthGuard]},
  ]
  },
];

@NgModule( {
  imports: [ RouterModule.forChild( routes ) ],
  exports: [ RouterModule ],
  providers: [ AuthGuard ]
} )

export class ServersRoutingModule {
}
