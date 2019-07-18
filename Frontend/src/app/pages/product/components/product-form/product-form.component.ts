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
  @Output() showListForm = new EventEmitter<any>();
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
    this.showListForm.emit(false);
    if (this.productForm.valid) {
      //this.onSubmit.emit();
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
