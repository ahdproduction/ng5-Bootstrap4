import { Component, OnInit } from '@angular/core';
import { Marketitem } from './marketitem';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'market-view',
  templateUrl: './market-view.component.html',
  styleUrls: ['./market-view.component.css']
})
export class MarketViewComponent implements OnInit {
  marketItems: Marketitem[] = [];
  constructor() { }

  ngOnInit() {
    for (let index = 0; index < 100; index++) {
      this.marketItems.push(
        new Marketitem(index, 'name', 'assets/img/ca.jpg', 100, false)
      );
      console.log('element #', this.marketItems[index].Id);
    }
  }

}
