import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { Product } from '../../model/product.model';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../../../services/producto.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {


  @Output() showComponent = new EventEmitter<any>();  /* <string>(); */

  @Input() detailProduct: Product = new Product(); /* set producto(p) {
    this.product = p || {products:[]};
  }
 */
  title = 'Product Detail';
  product: Product | undefined;

  constructor(private route: ActivatedRoute) { }

  @HostBinding('class') classes = 'row';   // agrega uana row al todo el componente de la clase

  ngOnInit() { }

  showPage() {
    return this.showComponent.emit({ page: 'list' });
  }
/* ////////////////////////////////////////////////////////// */
  showForm() {
    console.log('Al form desde det6alle');
    return this.showComponent.emit('form');
  }
  showList() {
    console.log('A lista desde det6alle');
    return this.showComponent.emit('list');
  }


  /* getProduct(id: number) {
    this.productService.getOneProducto(id);
  } */
}

