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
    private producto: ProductSerializer;
    private products: Product [] = [];

=======
  private productSerializer : ProductSerializer;
  private products : Product[] = [];
>>>>>>> b3207864e932ce850ca151574599540d00319710
  constructor(private http: HttpClient) {
  }

<<<<<<< HEAD
   getProductos(): Observable<Product[]> {
    return this.http.get<Array<Product>>(environment.API_BASE + 'productos')
    .pipe(
        map(
           (dato: Array<Product>) => this.productTransform(dato)
      )
    )
=======

  getProductos(): Observable<Product[]> {
    return this.http.get<Array<Product>>(environment.API_BASE + 'productos').pipe(
      map(
          (data:Array<Product>) => this.productTransform(data)
      )
    )
  }

  productTransform(data:Array<Product>):Array<Product>{
    return data;
>>>>>>> b3207864e932ce850ca151574599540d00319710
  }


  productTransform(datos: Array<Product>): Array <Product> {
    return datos;
  }
 
  getOneProducto( id: string | number) {  // id: string | number
   /*  return this.http.get<Product>(environment.API_BASE + 'producto/' + id).subscribe(
      producto => {
        this.product = producto;
        error => this.errorMessage = < any > error);
      } 
    );*/
  }

  saveProducto(prod: Product) {
    return this.http.post<Product>(environment.API_BASE + 'producto/', prod).subscribe((p: Product) => {
      this.products.push(p);
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
  updateProducto(id: string | number, nuevoProd: Product){
    console.log('a ver ' + nuevoProd + '--' + id);
    // return this.http.put(environment.API_BASE + 'producto/${id}', nuevoProd).subscribe((p: Producto) => {
    //   this.productos.push(p);
    //   this.notificarCambios();
    // });
  }

  notificarCambios(){
    /*  this.product$.next(this.products);  */
  } 
}
