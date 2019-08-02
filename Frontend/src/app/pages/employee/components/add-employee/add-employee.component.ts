import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // FormBuilder crear formularios.
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from '../../model/employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  @Input() employees: string[];
  @Input() relations: string[];
  @Output() showList = new EventEmitter<any>();
  employeedForm: FormGroup;
  empleadoPrueba: Employee[];
  title = 'Add employee';
<<<<<<< HEAD
  @Output() submitFormNotification =  new EventEmitter < FormGroup > ();
  
=======

>>>>>>> e9b080db955db77124a963138cfc4d1fecb6f047
  constructor(private fb: FormBuilder, private service: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.employeedForm = this.fb.group({
      nombre: ['', Validators.required],
      lastname: ['', Validators.required],
      documento: ['', Validators.required],
      dir: ['', Validators.required]
      /*  imagen: ['', Validators.required],
       descripcion: ['', Validators.required], */
      /* tmstmp: ['',] */
    });
<<<<<<< HEAD
  }
  
 
  onBack(): void {

  }
=======
  }
  
  addEmployee(a: HTMLInputElement, s: HTMLInputElement) {  // para decirle que es un imput desde html

    console.log('enviando...' + a.value + '--' + s.value);
    this.empleadoPrueba.push(null);
  }
  onBack(): void {

  }
>>>>>>> e9b080db955db77124a963138cfc4d1fecb6f047
  cancel() {
    alert('CONFIRMA ?');
    this.router.navigate(['/productos']);
  }
  /* showList() {
    return this.showListForm.emit('list');
  }
  showDetail() {
    return this.showListForm.emit('detail');
  } */
  submit() {
    if (this.employeedForm.valid) {
      console.log(this.employeedForm.value);
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
  addEmployee(a: HTMLInputElement, s: HTMLInputElement) {  // para decirle que es un imput desde html

    console.log('enviando...' + a.value + '--' + s.value);
    this.empleadoPrueba.push(null);
  }
}
