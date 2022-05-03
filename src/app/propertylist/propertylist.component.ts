import { Component, OnInit } from '@angular/core';
import { PropertiesService } from '../HousingServices/properties.service';
import { Iproperty } from '../propertycard/iproperty';

@Component({
  selector: 'app-propertylist',
  templateUrl: './propertylist.component.html',
  styleUrls: ['./propertylist.component.css'],
})
export class PropertylistComponent implements OnInit {
  constructor(private PropertiesService56: PropertiesService) {}

  properties: any;
  ngOnInit(): void {
    this.PropertiesService56.GetallProperties().subscribe(
      (data) => {
        this.properties = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
