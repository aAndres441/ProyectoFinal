import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'; // para las peticiones
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ProductSerializer } from '../serializers/product-serializer';
import { Product } from '../pages/product/model/product.model'

@Injectable({
  providedIn: 'root'
})

export class ProductoService {

<<<<<<< HEAD
  private productSerializer : ProductSerializer;
  private products : Product[] = [];
=======
  private producto: ProductSerializer;
   private products: Product [] = [];

>>>>>>> e9b080db955db77124a963138cfc4d1fecb6f047
  constructor(private http: HttpClient) {
    /* this.getProductos().subscribe(
      prods => {
        this.productos = prods;
        localStorage.setItem('producto', JSON.stringify(prods));
        this.notificarCambios();
      }, error => {
        this.productos = JSON.parse(localStorage.getItem('producto'));
        this.notificarCambios();
      }); */
  }


  getProductos(): Observable<Product[]> {
    return this.http.get<Array<Product>>(environment.API_BASE + 'productos').pipe(
      map(
          (data:Array<Product>) => this.productTransform(data)
      )
    )
  }

  productTransform(data:Array<Product>):Array<Product>{
    return data;
  }

/* 
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
  } */
}
