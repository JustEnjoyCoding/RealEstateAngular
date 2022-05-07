import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-porpertydetail',
  templateUrl: './porpertydetail.component.html',
  styleUrls: ['./porpertydetail.component.css'],
})
export class PorpertydetailComponent implements OnInit {
  propertyID: number = 0;
  constructor(
    private Getrouteparameter: ActivatedRoute,
    private Chaneroute: Router
  ) {}

  ngOnInit(): void {
    this.propertyID = +this.Getrouteparameter.snapshot.params['id'];
  }

  onBack() {
    alert('Ths is vinod');
    this.Chaneroute.navigate(['']);
  }

  OnSelectnext(){
    this.propertyID = this.propertyID+1;
    this.Chaneroute.navigate(['propertydeatil', this.propertyID]);
  }
}
