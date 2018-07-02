import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveComponent } from './forms/reactive/reactive.component';
import { TemplateDrivingComponent } from './forms/template-driving/template-driving.component';
import { FormsComponent } from './forms/forms.component';
import { ObservablesComponent } from './observables/observables.component';
import { DirectivesComponent } from './directives/directives.component';
import { TemplatesComponent } from './templates/templates.component';
import { AuthGuard } from './auth/auth.guard';

const appRoutes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'templates', component: TemplatesComponent, canActivate: [ AuthGuard ]},
  {path: 'directives', component: DirectivesComponent, canActivate: [ AuthGuard ]},
  {path: 'observables', component: ObservablesComponent, canActivate: [ AuthGuard ]},
  {
    path: 'forms', component: FormsComponent, children: [
    {path: 'template-driving', component: TemplateDrivingComponent},
    {path: 'reactive', component: ReactiveComponent},
  ]
  },
];

@NgModule( {
  imports: [ RouterModule.forRoot( appRoutes ) ],
  exports: [ RouterModule ],
  providers: [ AuthGuard ]
} )

export class AppRoutingModule {
}
