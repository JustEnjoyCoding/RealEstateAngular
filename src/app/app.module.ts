import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavMenuModule } from './nav-menu/nav-menu.module';
import { PropertycardComponent } from './propertycard/propertycard.component';
import { PropertylistComponent } from './propertylist/propertylist.component';
import { HttpClientModule } from '@angular/common/http';
import { PropertiesService } from './HousingServices/properties.service';

@NgModule({
  declarations: [AppComponent, PropertycardComponent, PropertylistComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NavMenuModule,
    HttpClientModule,
  ],
  providers: [PropertiesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
