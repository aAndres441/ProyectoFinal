import { ProductoService } from 'src/app/services/producto.service';
import { Component, OnInit, ViewChild, ViewContainerRef, Input } from '@angular/core';
import { Product } from '../../model/product.model';
import { Router } from '@angular/router';
import { Observable, from } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  products : Product[];
  detailProduct : Product = new Product();
  prod : Product = null;
  showComponent:string = 'list';
  constructor( private productoService: ProductoService, private router: Router ) { }

   ngOnInit(): void {
    this.getProductos();
  }

  getProductos():void{
    this.productoService.getProductos().subscribe(
      (data) => {
        this.products = data
      }
    );
  }


  showPage(obj:any):string {
    console.log(obj);
    this.showComponent = obj.page;
    if(this.showComponent == "detail"){
      this.detailProduct = obj.product;
    }else if(this.showComponent == "list"){
      
    }else if(this.showComponent == "form"){
      if(obj.product){
        this.prod = obj.product;
      }else {
        this.prod = null;
      }
    }
    
    return this.showComponent;
  } 
 
    
  eliminar(id: string) {
    // console.log(id);
    // this.productoService.deleteProducto(id);
    // this.router.navigateByUrl('/producto/add');
    this.router.navigate(['producto']);  // cuando elimine va a la ruta producto listado
    // this.router.navigate(['producto/add']);
    // routerLink="/producto/edit/{{p.id}}"
  }
  /* onSubmitForm(form: any): void {
  } */

  sayHello() {
    alert('Digo hola a toda la hinchada');
  }
  
}

/*   back() {
    this.router.navigateByUrl('home');
  } */
/*   detailProduct: Product = {
    id: 0,
    nombre: '',
    imagen: '',
    descripcion: '',
    tmstmp: new Date() ,
  }; */
  /* detalProduct: Product = new Prduct; */
/*   showListForm = 'list';
  showImage = true;
  errorMessage = 'ta le erro!!'; */
 /*  block = false; */
 /* 
  cambioImage(): void {
    this.showImage = !this.showImage;
  }
  ndate() {
    this.block = !this.block;
  } */
  