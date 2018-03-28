import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Marketitem } from '../market-view/market-item';

@Component({
	selector: 'app-market-view-detail',
	templateUrl: './market-view-detail.component.html',
	styleUrls: ['./market-view-detail.component.css']
})
export class MarketViewDetailComponent implements OnInit {
	
		// @Input() name;
		@Input() marketitem;
	
		constructor(public activeModal: NgbActiveModal) {}
	
		ngOnInit() {
		}
	
}
