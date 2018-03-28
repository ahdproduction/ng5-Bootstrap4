import { Pipe, PipeTransform } from '@angular/core';
import { Marketitem } from './market-view/market-item';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  
  transform(items: any[], filter): any {
    console.log('term', filter);
    if (!items) { return []; }
    if (!filter) { return items; }
    
    filter = filter.toLowerCase();
    
    return filter 
    ? items.filter(item => item.title.toLowerCase().indexOf(filter) !== -1)
    : items;
  }
  
}
