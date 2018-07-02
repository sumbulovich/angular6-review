import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { TemplatesComponent } from './templates/templates.component';
import { DirectivesComponent } from './directives/directives.component';
import { DirectiveDirective } from './directives/directive.directive';
import { ServicesComponent } from './services/services.component';
import { ServiceService } from './services/service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoutingComponent } from './routing/routing.component';
import { AuthService } from './auth/auth.service';
import { ErrorComponent } from './routing/error/error.component';
import { ObservablesComponent } from './observables/observables.component';
import { FormsComponent } from './forms/forms.component';
import { TemplateDrivingComponent } from './forms/template-driving/template-driving.component';
import { ReactiveComponent } from './forms/reactive/reactive.component';
import { PipesComponent } from './pipes/pipes.component';
import { PipePipe } from './pipes/pipe.pipe';
import { HttpComponent } from './http/http.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './http/auth/auth.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorModule } from './routing/error/error.module';
import { ServersModule } from './http/servers/servers.module';
import { ElementsComponent } from './elements/elements.component';
import { ChildElementComponent } from './elements/child-element/child-element.component';
import { AnimationsComponent } from './animations/animations.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule( {
  declarations: [
    AppComponent,
    ChildComponent,
    TemplatesComponent,
    DirectivesComponent,
    DirectiveDirective,
    ServicesComponent,
    RoutingComponent,
    ErrorComponent,
    ObservablesComponent,
    FormsComponent,
    TemplateDrivingComponent,
    ReactiveComponent,
    PipesComponent,
    PipePipe,
    HttpComponent,
    AuthComponent,
    AnimationsComponent,
    ElementsComponent,
    ChildElementComponent,
  ],
  imports: [
    BrowserModule, // BrowserModule includes CommonModule with additional features only needed when application start
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    ServersModule,
    ErrorModule,
    BrowserAnimationsModule
  ],
  providers: [ ServiceService, AuthService ],
  bootstrap: [ AppComponent ],
  entryComponents: [ChildElementComponent]
} )
export class AppModule {
}
