import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-propertycard',
  templateUrl: './propertycard.component.html',
  styleUrls: ['./propertycard.component.css'],
})
export class PropertycardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() PropertyItem: any;
}
