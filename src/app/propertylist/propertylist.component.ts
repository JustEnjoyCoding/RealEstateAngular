import { Component, OnInit, Input } from '@angular/core';
import { PropertiesService } from '../HousingServices/properties.service';
import { Iproperty } from '../propertycard/iproperty';

@Component({
  selector: 'app-propertylist',
  templateUrl: './propertylist.component.html',
  styleUrls: ['./propertylist.component.css'],
})
export class PropertylistComponent implements OnInit {
  constructor(private PropertiesService56: PropertiesService) {}
  @Input() SaleRentlist: number = 0;
  properties: Iproperty[] = [];
  ngOnInit(): void {
    this.PropertiesService56.GetallProperties(this.SaleRentlist).subscribe(
      (data) => {
        this.properties = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
