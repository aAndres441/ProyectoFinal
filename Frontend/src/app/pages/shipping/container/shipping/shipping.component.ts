import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  
  back() {
<<<<<<< HEAD
    this.router.navigateByUrl('inicio');
=======
    this.router.navigateByUrl('home');
>>>>>>> e9b080db955db77124a963138cfc4d1fecb6f047
  }

}
