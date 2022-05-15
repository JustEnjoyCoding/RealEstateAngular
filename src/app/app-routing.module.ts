import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpropertyComponent } from './propertycard/addproperty/addproperty.component';
import { BuylistComponent } from './propertylist/buylist/buylist.component';
import { PropertylistComponent } from './propertylist/propertylist.component';
import { RentlistComponent } from './propertylist/rentlist/rentlist.component';
import { PorpertydetailComponent } from './propertycard/porpertydetail/porpertydetail.component';
import { PagenotfoundComponent } from './propertycard/pagenotfound/pagenotfound.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregisterComponent } from './userregister/userregister.component';

const routes: Routes = [
  { path: '', component: PropertylistComponent },
  { path: 'addproperty', component: AddpropertyComponent },
  { path: 'rentproperty', component: RentlistComponent },
  { path: 'buyproperty', component: BuylistComponent },
  { path: 'propertydeatil/:id', component: PorpertydetailComponent },
  { path: 'user/login', component: UserloginComponent },
  { path: 'user/register', component: UserregisterComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
