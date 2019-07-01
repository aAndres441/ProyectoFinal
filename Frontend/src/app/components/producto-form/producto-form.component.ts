import { Component, OnInit, HostBinding } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {

  pageTitle = 'FORMULARIO' ;
  public producto: Producto;  // en esta prop se llenara los datos del form
  public productos$: Observable<Producto[]>;

  @HostBinding('class') classes = 'row';  // para estilizar el html, lo almaceno en prop classes, hace que el componente tenga la clase row 

  prod: Producto = {
    id: 0,
    nombre: '',
    imagen: '',
    descripcion: '',
    tmstmp: new Date(),
    precio: 0.0
  }

  edit: boolean;  // arranca en  = false;

  constructor(private productoService: ProductoService, private router: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params[' id'];  //traigo y guardo los parametros

    this.productos$ = this.productoService.productos$;
    if (id) {
      this.productoService.getOneProducto(id);
      console.log('EDITAR el producto de id ' + id);
    } else {
      console.log('AGREGA un producto  nuevo');
      this.producto = new Producto();
      this.edit = true;
    }
  }
  /**/

  guardar() {
    console.log(this.edit + ' se guardara el ' + this.producto.nombre);

    this.productoService.saveProducto(this.producto);
    this.router.navigateByUrl('/producto/add');

    this.edit = false;
    this.router.navigate(['producto']);  // cuando guarda va a la ruta producto listado
  }

  editProducto(){
   // console.log(this.producto);
   
  console.log (this.edit + ' edita');
  //this.edit ? false : true ;
   this.edit = true;


   // this.productoService.updateProducto(this.producto.id, this.producto);
   // this.router.navigate(['producto']);  // cuando actualize, anda a la ruta producto listado

  //   this.productoService.updateProducto(this.producto.id, this.producto).subscribe{
  //     res =>{
  //       console.log(res);
  //     },
  //     err=>(console.log(err)
  //   }


   }

}