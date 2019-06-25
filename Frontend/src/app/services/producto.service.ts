import { Injectable } from '@angular/core';

import {HttpClient } from '@angular/common/http';//para las peticiones

import { Producto } from '../models/producto'
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export interface ProductList {
  prods: Producto[];
}

@Injectable({
  providedIn: 'root'
})

export class ProductoService {

  private productos: Producto[] = [];
  private producto : Producto;
  public productos$: BehaviorSubject<Producto[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) {
    this.getProductos().subscribe(
      prods => {
        this.productos = prods;
        localStorage.setItem('producto', JSON.stringify(prods));
        this.notificarCambios();
      }, error => {
        this.productos = JSON.parse(localStorage.getItem('producto'));
        this.notificarCambios();
      });
  }


  getProductos(): Observable<Producto[]> {
    return this.http.get<ProductList>(environment.API_BASE + 'producto')
      .pipe(
        map(productList => productList.prods)
      );
  }


  getOneProducto( id: string | number) {  // id: string | number
    return this.http.get<Producto>(environment.API_BASE + 'producto/' + id).subscribe(
      producto => {
        this.producto = producto;
      }
    );
  }

  saveProducto(prod: Producto) {
    
    return this.http.post<Producto>(environment.API_BASE + 'producto/', prod).subscribe((p: Producto) => {
      this.productos.push(p);
      this.notificarCambios();
    });
    console.log( ' Servicio lo guardo ' + prod.nombre );
  }

  deleteProducto( id: string | number){
    // return this.http.delete(environment.API_BASE + 'producto/${id}').subscribe((p: Producto) => {
    //   this.productos.splice(p.id);
    //   this.notificarCambios();
    // });
    console.log('Hola verano ' + id);
  }
  updateProducto(id: string | number, nuevoProd: Producto){
    console.log('a ver ' + nuevoProd + '--' + id);
    // return this.http.put(environment.API_BASE + 'producto/${id}', nuevoProd).subscribe((p: Producto) => {
    //   this.productos.push(p);
    //   this.notificarCambios();
    // });
  }

  notificarCambios(){
    this.productos$.next(this.productos);
  }
}
