import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { Product } from '../../model/product.model';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

 /*  @HostBinding('attr.class') cssClass = 'row bg-dark'; */ /* puedo cambiar prop */
  
  @Input() product: Product;
  @Output() submitFormNotification =  new EventEmitter < FormGroup > ();

  @Output() showListForm = new EventEmitter <any>();

  productForm: FormGroup;
  
  losProducts: Product[] = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.productForm = this.fb.group({
      nombre: ['', Validators.required],
      imagen: ['', Validators.required],
      descripcion: ['', Validators.required],
      tmstmp: ['', ]
    });
  }
  
  showList() {
    return this.showListForm.emit('list');
  }
  showDetail() {
    return this.showListForm.emit('detail');
  }

  agregaProdPrueba(name, y, x) {
    this.losProducts.push(name.value);
    this.productForm.reset();
    console.warn('ESE lente');
    console.log(name.value, x.value, y.value);
    console.log(this.losProducts.length);
    name.value = '';
    y.value = '';
    x.value = '';
    return false;
    // cancela el reseteado de la pagina
  }
  onSubmit(): void {
    const form: Product = Object.assign({}, this.product);
    console.warn('Your order has been submitted');

    if (this.productForm.valid) {
      this.submitFormNotification.emit(this.productForm.value);
      console.log(form.nombre.toUpperCase());
    }
    // this.productForm.reset();
  }

  guardar() {
    /*  console.log(this.edit + ' se guardara el ' + this.producto.nombre);
 
     this.productoService.saveProducto(this.producto);
     this.router.navigateByUrl('/producto/add');
 
     this.edit = false;
     this.router.navigate(['producto']); */  // cuando guarda va a la ruta producto listado
  }

  editProducto() {
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
