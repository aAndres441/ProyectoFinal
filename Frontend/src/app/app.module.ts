
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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


@NgModule({
  declarations: [
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ProductModule,
    ReactiveFormsModule
  ],
  providers: [
    ProductoService,
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
