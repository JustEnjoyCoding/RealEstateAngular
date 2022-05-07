import { Component, OnInit, Input } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
import { Iproperty } from './iproperty';

@Component({
  selector: 'app-propertycard',
  templateUrl: './propertycard.component.html',
  styleUrls: ['./propertycard.component.css'],
})
export class PropertycardComponent implements OnInit {



  constructor() {



  }
  ngOnInit(): void {



  }

  @Input() PropertyItem:Iproperty={ID:0,Name:'',Type:'',Price:0,ImgName:''};

}
