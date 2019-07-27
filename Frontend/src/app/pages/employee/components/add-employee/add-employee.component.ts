import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from '../../model/employee.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  @Input() products: string[];
  @Input() relations: string[];
  @Output() showList = new EventEmitter<any>();
  employeedForm: FormGroup;
  empleadoPrueba: Employee[];

  constructor(private fb: FormBuilder, private service: EmployeeService) { }

  ngOnInit() {
    this.employeedForm = this.fb.group({
      nombre: ['', Validators.required],
     /*  imagen: ['', Validators.required],
      descripcion: ['', Validators.required], */
      tmstmp: ['', ]
    });
  }
  addEmployee( a: HTMLInputElement, s: HTMLInputElement) {  // para decirle que es un imput desde html
    console.log('enviando...' + a.value + '--' + s.value);
    this.empleadoPrueba.push(null);
  }

  submit() {
    if (this.employeedForm.valid) {
    } else {
      this.showErrorAlert('Debe completar todos los campos.')
    }
  }
  showErrorAlert(arg0: string) {
    throw new Error(' Method not implemented.');
  }
  /*  get selectedProduct() {
     return this.service.getEmployee('products');
   }  */

  consultarBtn() {
    this.showList.emit();
  }

}
