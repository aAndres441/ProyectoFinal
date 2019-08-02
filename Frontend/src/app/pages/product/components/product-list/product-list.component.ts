import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { Product } from '../../model/product.model';
import {ProductoService} from '../../../../services/producto.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  // @HostBinding('class') classes = 'row';  // todo el componente tendra una fila

  /*   public productos$: Observable<Product[]>;
    public producto: Product;*/

  private showImage = false;
  
  @Input() products: Product[];// Array<Product>;

  @Output() submitFormNotification = new EventEmitter<any>();

  @Output() showListForm = new EventEmitter <any>();

  pageTitle = 'Productos';

  productPrueba = [];

  constructor() {
     this.productPrueba = [ {id:'1', nombre:'Soja', imagen:'https://res.cloudinary.com/carsguide/image/upload/f_auto,fl_lossy,q_auto,t_cg_vehicle_icon_lg/v1/editorial/vhs/Jeep-Compass_0.png', descripcion: 'soja de primera', fecha:'3333'},
     {id:'2', nombre:'Maiz', imagen:'m', descripcion: 'maiz de primera', fecha:'11'},
     {id:'3', nombre:'Palta', imagen:'p', descripcion: 'aplta de primera', fecha:'88'},
     {id:'55', nombre:'hh', imagen:'hhhj', descripcion: 'soja de primera', fecha:'55'}];
}

  ngOnInit() {
    
  }
  public getproductPrueba(){
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