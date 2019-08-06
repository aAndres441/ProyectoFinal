
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import {ProductoService} from './services/producto.service';
import { ThemeModule } from './theme/theme.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
=======
/* import { NavigationComponent } from './shared/navigation/navigation.component'; */
import { ProductModule } from './pages/product/product.module';
import {ProductoService} from './services/producto.service';
import { HomeComponent } from './pages/home/home.component';
import { DocumentsComponent } from './pages/employee/components/documents/documents.component';
import { EmployeeComponent } from './pages/employee/containers/employee/employee.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ContainersComponent } from './pages/shipping/containers/containers.component';
import { ShippingListComponent } from './pages/shipping/components/shipping-list/shipping-list.component';
import { ShippingAddComponent } from './pages/shipping/components/shipping-add/shipping-add.component';
import { EmployeeService } from './services/employee.service';
import { FooterComponent } from './shared/footer/footer.component';
>>>>>>> e9b080db955db77124a963138cfc4d1fecb6f047

const PAGES_MODULES = [
  ProductModule,
  ThemeModule
];

@NgModule({
  declarations: [
<<<<<<< HEAD
    AppComponent
=======
    AppComponent,
    /* NavigationComponent, */
    HomeComponent,
    DocumentsComponent,
    EmployeeComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ContainersComponent,
    ShippingListComponent,
    ShippingAddComponent
>>>>>>> e9b080db955db77124a963138cfc4d1fecb6f047
  ],

  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
<<<<<<< HEAD
    RouterModule,
    ...PAGES_MODULES
=======
    FormsModule,
    ProductModule,
    ReactiveFormsModule
>>>>>>> e9b080db955db77124a963138cfc4d1fecb6f047
  ],
  providers: [
    ProductoService,
    EmployeeService
  ],
  bootstrap: [AppComponent],
  schemas :[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
