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
import { AddpropertyComponent } from './propertycard/addproperty/addproperty.component';
import { PorpertydetailComponent } from './propertycard/porpertydetail/porpertydetail.component';
import { BuylistComponent } from './propertylist/buylist/buylist.component';
import { RentlistComponent } from './propertylist/rentlist/rentlist.component';
import { PagenotfoundComponent } from './propertycard/pagenotfound/pagenotfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { UserServiceService } from './HousingServices/user-service.service';
import { UserAuthService } from './HousingServices/user-auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    PropertycardComponent,
    PropertylistComponent,
    AddpropertyComponent,
    PorpertydetailComponent,
    BuylistComponent,
    RentlistComponent,
    PagenotfoundComponent,
    UserloginComponent,
    UserregisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NavMenuModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
  ],
  providers: [PropertiesService, UserServiceService, UserAuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
