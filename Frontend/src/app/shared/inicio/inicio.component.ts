import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public pageTitle = 'Welcome to CARDONA city';
  public errorMessage = '';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  /* onBack(): void {
    this.router.navigate(['/productos']);
  } */

}
