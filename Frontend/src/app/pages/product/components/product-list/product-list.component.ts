import { ProductoService } from './../../../../services/producto.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

/*   public productos$: Observable<Product[]>;
  public producto: Product;
  private showImage = false; */
  @Input() products : Product[];
  @Output() showListForm = new EventEmitter<any>();
  
  constructor() {  }

  ngOnInit() {
  }

 /*  toggleImage(): void {
    this.showImage = !this.showImage;
  } */
  /* onSubmit(): void {
    this.submitFormNotification.emit(this.products);
  } */
  showForm(){
    return this.showListForm.emit('form');
  }
}
