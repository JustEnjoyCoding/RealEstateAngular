import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rentlist',
  templateUrl: './rentlist.component.html',
  styleUrls: ['./rentlist.component.css'],
})
export class RentlistComponent implements OnInit {
  SaleRent: number = 2;
  constructor() {}

  ngOnInit(): void {}
}
