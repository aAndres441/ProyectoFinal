import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Output() showListForm = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  showForm(){
    return this.showListForm.emit("form");
  }
}
