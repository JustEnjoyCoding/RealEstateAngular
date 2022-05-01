import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavMenuRoutingModule } from './nav-menu-routing.module';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, NavMenuRoutingModule],
  exports: [NavbarComponent],
})
export class NavMenuModule {}
