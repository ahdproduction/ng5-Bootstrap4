import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketViewDetailComponent } from './market-view-detail.component';

describe('MarketViewDetailComponent', () => {
  let component: MarketViewDetailComponent;
  let fixture: ComponentFixture<MarketViewDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketViewDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketViewDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
