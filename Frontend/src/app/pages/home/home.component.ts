import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public pageTitle = 'Welcome to CARDONA city';
  public errorMessage = '';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }
  
  onBack(): void {
    this.router.navigate(['/productos']);
  }
}
