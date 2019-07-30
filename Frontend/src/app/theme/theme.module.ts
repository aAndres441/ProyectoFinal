import {HomeComponent,SidebarComponent,LayoutComponent,InicioComponent} from './components/index';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

  const COMPONENTS = [
    HomeComponent,
    SidebarComponent,
    LayoutComponent,
    InicioComponent
  ];
  const MODULES = [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ];

  @NgModule({
    imports: [
      ...MODULES
    ],
    exports: [
      ...COMPONENTS,
      ...MODULES
    ],
    declarations: [
      ...COMPONENTS
    ]
  })
  export class ThemeModule {}