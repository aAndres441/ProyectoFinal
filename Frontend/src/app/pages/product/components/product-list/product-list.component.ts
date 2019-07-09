import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { Observable } from 'rxjs';
import { ProductoService } from 'src/app/services/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public productos$: Observable<Producto[]>;
  public producto: Producto;
  private showImage = false;

  constructor( private productoService: ProductoService, private router: Router ) {  }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(){
    this.productos$ = this.productoService.getProductos();
    console.log('A veeer');
    console.log(this.productos$);
    console.log('A veeer');
  }
  eliminar(id: string) {
    //console.log(id);
    this.productoService.deleteProducto(id);
    // this.router.navigateByUrl('/producto/add');
    this.router.navigate(['producto']);  // cuando elimine va a la ruta producto listado
    // this.router.navigate(['producto/add']);
    //routerLink="/producto/edit/{{p.id}}" 
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  

}
