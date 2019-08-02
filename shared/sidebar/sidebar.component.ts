import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() tipo: string;
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout(): void {
    // this.tipo.logout();
    this.router.navigate(['/home']);
  }
}
