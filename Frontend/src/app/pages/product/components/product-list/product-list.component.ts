import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../model/product.model';
import {ProductoService} from '../../../../services/producto.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  /*   public productos$: Observable<Product[]>;
    public producto: Product;*/

  private showImage = false;
  
  @Input() products: Product[];// Array<Product>;

  @Output() submitFormNotification = new EventEmitter<any>();

  @Output() showListForm = new EventEmitter <any>();

  constructor() { }

  ngOnInit() {
  }

  /* onSubmit(): void {
    this.submitFormNotification.emit(this.Product);
  } */

  /* showForm2(): void {
    this.showImage = !this.showImage;
  } */

  showForm() {
    return this.showListForm.emit('form');
  }
  
  showDetail() {
    return this.showListForm.emit('detail');
  }
  
}



  /*  toggleImage(): void {
     this.showImage = !this.showImage;
   } */