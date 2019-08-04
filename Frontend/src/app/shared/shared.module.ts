import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms' ;
import { RouterModule } from '@angular/router' ;

import {
  HeaderComponent,
  NavigationComponent,
  SidebarComponent,
  FooterComponent,
  InicioComponent,
  HomeComponent,
  LayoutComponent
 } from './index';
 

const APP_SHARED_COMPONENTS = [
  HeaderComponent,
  NavigationComponent,
  SidebarComponent,
  FooterComponent,
  HomeComponent,
  InicioComponent,
  LayoutComponent
];

const BASE_MODULES = [
  CommonModule,
  ReactiveFormsModule,
  RouterModule,
  FormsModule
  
]

@NgModule({
  declarations: [
    ...APP_SHARED_COMPONENTS
  ],
  
  imports: [
    BASE_MODULES
  ],
  exports: [
    APP_SHARED_COMPONENTS
  ]
})

export class SharedModule { }
