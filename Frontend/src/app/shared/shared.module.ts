import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  HeaderComponent,
  NavigationComponent,
  SidebarComponent,
  FooterComponent,
  InicioComponent,
  HomeComponent
 } from './index';

const APP_SHARED_COMPONENTS = [
  HeaderComponent,
  NavigationComponent,
  SidebarComponent,
  FooterComponent,
  HomeComponent,
  InicioComponent
];

const BASE_MODULES = [
  CommonModule
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
