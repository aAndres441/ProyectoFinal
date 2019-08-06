import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import {Employee} from '../../model/employee.model';
>>>>>>> e9b080db955db77124a963138cfc4d1fecb6f047

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
<<<<<<< HEAD

  constructor() { }
=======
 
  empleados: Employee[] = [];
  employee: Employee;
  constructor() {
    
   }
>>>>>>> e9b080db955db77124a963138cfc4d1fecb6f047

  ngOnInit() {
  }

}
