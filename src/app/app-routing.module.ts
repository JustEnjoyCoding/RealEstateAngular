import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpropertyComponent } from './propertycard/addproperty/addproperty.component';
import { BuylistComponent } from './propertylist/buylist/buylist.component';
import { PropertylistComponent } from './propertylist/propertylist.component';
import { RentlistComponent } from './propertylist/rentlist/rentlist.component';
import { PorpertydetailComponent } from './propertycard/porpertydetail/porpertydetail.component';

const routes: Routes = [
  { path: '', component: PropertylistComponent },
  { path: 'addproperty', component: AddpropertyComponent },
  { path: 'rentproperty', component: RentlistComponent },
  { path: 'buyproperty', component: BuylistComponent },
  { path: 'propertydeatil', component: PorpertydetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
