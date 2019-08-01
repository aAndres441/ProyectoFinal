import { ProductoService } from 'src/app/services/producto.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products : Product[];
  detailProduct : Product = new Product();
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
  
  eliminar(id: string) {
    //console.log(id);
    //this.productoService.deleteProducto(id);
    // this.router.navigateByUrl('/producto/add');
    this.router.navigate(['producto']);  // cuando elimine va a la ruta producto listado
    // this.router.navigate(['producto/add']);
    //routerLink="/producto/edit/{{p.id}}" 
  }
  showPage(obj:any):string {
    console.log(obj);
    this.showComponent = obj.page;
    if(this.showComponent == "detail"){
      this.detailProduct = obj.product;
    }
    
    return this.showComponent;
  } 
 
}
