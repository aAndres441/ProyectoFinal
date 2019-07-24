import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private route:Router,private actRoute : ActivatedRoute) { }

  ngOnInit() {

  }
  onSubmit(){
    //this.route.navigate("productos");
  }
  productos():void{
    this.route.navigate(['productos']);
  }
}
