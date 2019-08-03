<<<<<<< HEAD
import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // FormBuilder crear formularios.
import { Product } from '../../model/product.model';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
=======
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../model/product.model';
import { FormGroup, Validators, FormControl} from '@angular/forms';
>>>>>>> b3207864e932ce850ca151574599540d00319710

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
<<<<<<< HEAD

 /*  @HostBinding('attr.class') cssClass = 'row bg-dark'; */ /* puedo cambiar prop del componente, ej tiene un row negra */
  
  @Input() product: Product;
  @Output() submitFormNotification =  new EventEmitter <FormGroup> ();
  @Output() showComponent  = new EventEmitter <any>();

  productForm: FormGroup;
  title = 'Add product';
  losProducts: Product[] = [];

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.productForm = this.fb.group({
      nombre: ['', Validators.required]
     /*  imagen: ['', Validators.required],
      descripcion: ['', Validators.required],
      tmstmp: ['', ] */
    });
  }

  showList() {
     this.showComponent.emit({ ' pag ' : 'list'});
  }
  showDetail() {
     this.showComponent.emit({ ' pag ' : 'detail'});
  }

  cancel() {
    console.log('cancelo');
  }

  onSubmit() {
    console.log("form value: ");
    console.log(this.productForm);
   /*  const form: Product = Object.assign({}, this.product);
    console.warn('Your order has been submitted');
    if (this.productForm.valid) {
      this.submitFormNotification.emit(this.productForm.value);
      console.log(form.nombre.toUpperCase());
    } */
    // this.productForm.reset();
  }
  
  submit() {
    if (this.productForm.valid) {
      console.log(this.productForm.value);
    } else {
      this.showErrorAlert('Debe completar todos los campos.')
    }
  }

  getnombre(){
    return this.productForm.value();
=======
  @Input() product : Product;
  @Output() showComponent = new EventEmitter<any>();

  public productForm:FormGroup;

  constructor() { }

  ngOnInit() {
    this.productForm = new FormGroup({
        nombre : new FormControl(this.product.nombre,[Validators.required]),
        imagen : new FormControl(this.product.imagen,[Validators.required]),
        descripcion : new FormControl(this.product.descripcion, [Validators.required])
      }
    );
  }
  onSubmit(){
    console.log("form value: ");
    console.log(this.productForm);
    //this.showComponent.emit({"page":"list","form" : this.productForm.value});
  }

  guardar() {
>>>>>>> b3207864e932ce850ca151574599540d00319710
  }
  /* 
  submit() {
    console.log(this.productForm.value);
  } */

<<<<<<< HEAD
  
 /*  addProduct2() {
    const form: Product = Object.assign({}, this.product);
    if (this.productForm.valid) {
      this.submitFormNotification.emit(this.productForm.value);
      console.log(form.nombre.toUpperCase());
    
    } else {
      this.showErrorAlert('Debe completar todos los campos.')
    }
  } */
  /* 
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

  addProduct( a: HTMLInputElement, s: HTMLInputElement) {  // para decirle que es un imput desde html
    console.log('enviando...' + a.value + '--' + s.value);
    this.losProducts.push(null);
  } */
  showErrorAlert(arg: string) {
    console.log(' Method not implemented.' + arg);
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
  
 
=======
  editProducto(){
  }

  get nombre (){
    return this.productForm.get('nombre');
  }
  get imagen (){
    return this.productForm.get('imagen');
  }
  get descripcion (){
    return this.productForm.get('descripcion');
  } 
>>>>>>> b3207864e932ce850ca151574599540d00319710

  showList(){
    this.showComponent.emit({"page":"list"});
  }
}
