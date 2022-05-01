import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavMenuModule } from './nav-menu/nav-menu.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, NavMenuModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
