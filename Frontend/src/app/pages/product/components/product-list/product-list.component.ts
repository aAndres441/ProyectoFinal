import { Product } from './../../model/product.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
<<<<<<< HEAD
=======
import { Product } from '../../model/product.model';
import {ProductoService} from '../../../../services/producto.service';
>>>>>>> e9b080db955db77124a963138cfc4d1fecb6f047

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

<<<<<<< HEAD
  @Input() products : Array<Product>;
  @Output() showComponent = new EventEmitter<any>();

  constructor() {  }

  ngOnInit() {
   
=======
  /*   public productos$: Observable<Product[]>;
    public producto: Product;*/

  private showImage = false;
  
  @Input() products: Product[];// Array<Product>;

  @Output() submitFormNotification = new EventEmitter<any>();

  @Output() showListForm = new EventEmitter <any>();

  pageTitle = 'Productos';

  productPrueba = [];

  constructor() {  
     this.productPrueba = [ {id:'1', nombre:'Soja', imagen:'s', descripcion: 'soja de primera', fecha:'3333'},
     {id:'2', nombre:'Maiz', imagen:'m', descripcion: 'maiz de primera', fecha:'11'},
     {id:'3', nombre:'Palta', imagen:'p', descripcion: 'aplta de primera', fecha:'88'},
     {id:'55', nombre:'hh', imagen:'hhhj', descripcion: 'soja de primera', fecha:'55'}];
}

  ngOnInit() {
    
>>>>>>> e9b080db955db77124a963138cfc4d1fecb6f047
  }
  public getproductPrueba(){
  }
  /* onSubmit(): void {
    this.submitFormNotification.emit(this.Product);
  } */

<<<<<<< HEAD
  showDetail(p:Product){
    return this.showComponent.emit({"page":"detail","product":p});
  }

  showForm(p:Product){
    if(!p) p = new Product();
    return this.showComponent.emit({"page":"form","product":p});
  }
  edit(p:Product){
    return this.showComponent.emit({"page":"form","product":p});
  }
=======
  /* showForm2(): void {
    this.showImage = !this.showImage;
  } */

  showForm() {
    return this.showListForm.emit('form');
  }
  
  showDetail() {
    return this.showListForm.emit('detail');
  }
  
>>>>>>> e9b080db955db77124a963138cfc4d1fecb6f047
}



  /*  toggleImage(): void {
     this.showImage = !this.showImage;
   } */