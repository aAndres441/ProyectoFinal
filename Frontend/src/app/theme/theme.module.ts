import {
    HomeComponent,
    SidebarComponent
  } from './components/index';
import { NgModule } from '@angular/core';

  const COMPONENTS = [
    HomeComponent,
    SidebarComponent
  ];

  @NgModule({
    imports: [
    ],
    exports: [
      ...COMPONENTS
    ],
    declarations: [
      ...COMPONENTS
    ]
  })
  export class ThemeModule {}