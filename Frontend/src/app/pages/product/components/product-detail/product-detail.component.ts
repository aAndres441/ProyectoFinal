import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Output() showComponent = new EventEmitter<any>();
  @Input() detailProduct : Product = new Product();

  constructor() { }

  ngOnInit() {
    
  }
  showList(){
    
  }
  showPage(){
    return this.showComponent.emit({"page":"list"});
  }
}
