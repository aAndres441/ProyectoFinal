import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

const APP_SHARED_COMPONENTS = [
  HeaderComponent,
  NavigationComponent,
  SidebarComponent,
  FooterComponent
];

@NgModule({
  declarations: [
    ...APP_SHARED_COMPONENTS
  ],
  imports: [
    CommonModule
  ]
})

export class SharedModule { }
