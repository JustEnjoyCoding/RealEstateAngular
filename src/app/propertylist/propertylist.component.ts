import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertylist',
  templateUrl: './propertylist.component.html',
  styleUrls: ['./propertylist.component.css'],
})
export class PropertylistComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  properties: Array<any> = [
    {
      ID: 1,
      Name: 'Birla Houses',
      Type: 'House',
      Price: 2800000,
      ImgName: 'House1.jpg',
    },
    {
      ID: 2,
      Name: 'Birla Houses',
      Type: 'House',
      Price: 2800000,
      ImgName: 'House2.jpg',
    },
    {
      ID: 3,
      Name: 'Kamla Houses',
      Type: 'House',
      Price: 400000,
      ImgName: 'House3.jpg',
    },
    {
      ID: 4,
      Name: 'Kanak Houses',
      Type: 'House',
      Price: 6800000,
      ImgName: 'House4.jpg',
    },
    {
      ID: 5,
      Name: 'Aapurva Houses',
      Type: 'House',
      Price: 2800000,
      ImgName: 'House5.jpg',
    },
    {
      ID: 6,
      Name: 'Birla Houses',
      Type: 'House',
      Price: 5800000,
      ImgName: 'House6.jpg',
    },
  ];
}
