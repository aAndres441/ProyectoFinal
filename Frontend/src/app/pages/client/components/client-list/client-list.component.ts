import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

title = 'Listado de Clientes';
  
  @Output() showListForm = new EventEmitter <any>();

  constructor() { }

  ngOnInit() {
  }

  showDetail() {
    console.log( ' ver detalles');
  }

  editClient() {
    console.log('editProducto');
 }

 showForm() {  
    return this.showListForm.emit('form');
  }
 

}
