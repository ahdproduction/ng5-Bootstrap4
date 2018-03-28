import { Component, OnInit, Input } from '@angular/core';
import { Marketitem } from './market-item';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MarketViewDetailComponent} from '../market-view-detail/market-view-detail.component';

@Component({
	// tslint:disable-next-line:component-selector
	selector: 'market-view',
	templateUrl: './market-view.component.html',
	styleUrls: ['./market-view.component.css']
})
export class MarketViewComponent implements OnInit {

	marketItems: Marketitem[] = [];

	constructor(private modalService: NgbModal) { }

	ngOnInit() {
		for (let index = 0; index < 100; index++) {
			this.marketItems.push(
				new Marketitem(index, 'name', 'assets/img/ca.jpg', 100, false)
			);
			// console.log('element #', this.marketItems[index].Id);
		}
	}

	open(item: Marketitem): void {
		const modalRef = this.modalService.open(MarketViewDetailComponent);
		modalRef.componentInstance.marketitem = item;
	}
}
