import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorpertydetailComponent } from './porpertydetail.component';

describe('PorpertydetailComponent', () => {
  let component: PorpertydetailComponent;
  let fixture: ComponentFixture<PorpertydetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorpertydetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorpertydetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
