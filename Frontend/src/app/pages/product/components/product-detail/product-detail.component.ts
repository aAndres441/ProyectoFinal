<<<<<<< HEAD
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Product } from '../../model/product.model';
=======
import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { Product } from '../../model/product.model';
import { ActivatedRoute } from '@angular/router';
import {ProductoService} from '../../../../services/producto.service';
>>>>>>> e9b080db955db77124a963138cfc4d1fecb6f047

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
<<<<<<< HEAD
  @Output() showComponent = new EventEmitter<any>();
  @Input() detailProduct : Product = new Product();

  constructor() { }

  ngOnInit() {
    
  }

  showPage(){
    return this.showComponent.emit({"page":"list"});
  }
}
=======

  
  @Input() products: Product[];// Array<Product>;

  @Output() submitFormNotification = new EventEmitter<any>();

  @Output() showListForm = new EventEmitter <any>();
  
  pageTitle = 'Product Detail';
  errorMessage = '';
  product: Product | undefined;

  constructor(private route: ActivatedRoute, private productService: ProductoService) { }

 @HostBinding ('class') classes = 'row';   // agrega uana row al todo el componente de la clase

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getProduct(id);
    }
  }

  showForm() {
    return this.showListForm.emit('form');
  }
  showList() {
    return this.showListForm.emit('list');
  }
  getProduct(id: number) {
    this.productService.getOneProducto(id);
  }
}

>>>>>>> e9b080db955db77124a963138cfc4d1fecb6f047
