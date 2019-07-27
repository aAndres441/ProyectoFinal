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

  $products: Observable <Product []>;
  products: Product [];
  showListForm: string = 'list'; 
  showForm = true;
  showImage = true;
  errorMessage = 'ta le erro!!';
  block = false;
  componentes: any;
  @Input() items: {
    header: string,
    content: string
  }[] = [];

  @Input() mode: 'card' | 'list' = 'card';
  
  /* @ViewChild('dynamic', { 
    read: ViewContainerRef 
  }) viewContainerRef: ViewContainerRef;
 */
  constructor( private productoService: ProductoService, private router: Router ) { }

   ngOnInit(): void {
    this.getProductos();
  }
  
  getProductos(): void {
    // this.productoService.getProductos().subscribe(
      // (products: Array<Product>) => this.products = products
     /*  ( json ) => {
        this. products  = json;
        console.log( this. products);
      }
    ); */
  }
 
  eliminar(id: string) {
    // console.log(id);
    // this.productoService.deleteProducto(id);
    // this.router.navigateByUrl('/producto/add');
    this.router.navigate(['producto']);  // cuando elimine va a la ruta producto listado
    // this.router.navigate(['producto/add']);
    // routerLink="/producto/edit/{{p.id}}"
  }
  onSubmitForm(form: any): void {
  }

  
  sayHello() {
    alert('Digo hola a toda la hinchada');
  }
  cambioImage(): void {
    this.showImage = !this.showImage;
  }
  ndate(){
    this.block = !this.block;
  }
  showPage( page: string ): string {
    this.showListForm  =  page ;
    return  this.showListForm ;
  }
  back() {
    this.router.navigateByUrl('home');
  }
}
