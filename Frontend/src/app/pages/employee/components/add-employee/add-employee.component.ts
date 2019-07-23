import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  @Input() products: string[];
  @Input() relations: string[];
  // tslint:disable-next-line: no-output-native
  @Output() show = new EventEmitter<any>();
  employeedForm: FormGroup;

  constructor(private fb: FormBuilder, private service: EmployeeService) { }

  ngOnInit() {
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
    this.show.emit();
  }

}
