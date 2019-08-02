import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  HeaderComponent,
  NavigationComponent,
  SidebarComponent,
<<<<<<< HEAD
  FooterComponent,
  InicioComponent,
  HomeComponent
 } from './index';

=======
  FooterComponent
 } from './index';
 
>>>>>>> e9b080db955db77124a963138cfc4d1fecb6f047
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
