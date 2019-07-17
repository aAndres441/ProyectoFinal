import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../model/product.model';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  @Input() product : Product;
  @Output() submitFormNotification = new EventEmitter<FormGroup>();
  
  productForm:FormGroup;

  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    
    this.productForm = this.fb.group({
      nombre : ['',Validators.required],
      imagen : ['', Validators.required],
      descripcion : ['', Validators.required],
      tmstmp : ['', Validators.required]
    });
  }
  
  onSubmit(): void {
    if (this.productForm.valid) {
      this.submitFormNotification.emit(this.productForm.value);
    }
  }

  guardar() {
  }

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
  get tmstmp (){
    return this.productForm.get('tmstmp');
  }
}
