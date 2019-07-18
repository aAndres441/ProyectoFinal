import { ProductoService } from 'src/app/services/producto.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  $products:Observable<Product[]>
  products : Product[];
  showListForm:boolean;
  constructor( private productoService: ProductoService, private router: Router ) { }

  
  ngOnInit(): void {
    this.getProductos();
  }

  getProductos():void{
    /* this.productoService.getProductos().subscribe(
      (json) => {
        this.products = json
        console.log(this.products)
      }
    ); */
  }
  
  eliminar(id: string) {
    //console.log(id);
    //this.productoService.deleteProducto(id);
    // this.router.navigateByUrl('/producto/add');
    this.router.navigate(['producto']);  // cuando elimine va a la ruta producto listado
    // this.router.navigate(['producto/add']);
    //routerLink="/producto/edit/{{p.id}}" 
  }
  onSubmit(bool:boolean):void {
    this.showListForm = bool;
  } 
 
}
