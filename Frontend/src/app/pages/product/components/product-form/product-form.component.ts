import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../model/product.model';
import { FormGroup, FormBuilder, Validators ,FormsModule, ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  @Input() product : Product;
  
  productForm:FormGroup;

  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    this.productForm = this.fb.group({
      nombre : ['',Validators.required],
      imagen : ['', ],
      descripcion : ['', ],
      tmstmp : ['', ]
    });
  }
  onSubmit(): void {
    const form: Product = Object.assign({}, this.product);
  }

  guardar() {
   /*  console.log(this.edit + ' se guardara el ' + this.producto.nombre);

    this.productoService.saveProducto(this.producto);
    this.router.navigateByUrl('/producto/add');

    this.edit = false;
    this.router.navigate(['producto']); */  // cuando guarda va a la ruta producto listado
  }

  editProducto(){
   // console.log(this.producto);
   
 /*  console.log (this.edit + ' edita');
  //this.edit ? false : true ;
   this.edit = true; */


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
