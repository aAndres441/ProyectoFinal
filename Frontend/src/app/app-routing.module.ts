import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './theme/components/inicio/inicio.component';

const routes: Routes = [
  { path: '',   redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'layout', loadChildren: '../app/pages/pages.module#PagesModule'},
  { path: '**', redirectTo: 'layout' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
