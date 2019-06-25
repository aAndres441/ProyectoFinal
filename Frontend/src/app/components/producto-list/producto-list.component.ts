import { Producto } from './../../models/producto';
import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service'
import { Observable } from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {
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
