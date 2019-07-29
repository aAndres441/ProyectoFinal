
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule } from './pages/product/product.module';
import { ProductoService} from './services/producto.service';
import { HomeComponent } from './pages/home/home.component';
import { EmployeeService } from './services/employee.service';
import { EmployeeModule } from './pages/employee/employee.module';
import { ShippingModule} from './pages/shipping/shipping.module';
import { SharedModule } from './shared/shared.module';
import { SaleModule} from './pages/sale/sale.module';
import { BuyModule} from './pages/buy/buy.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ProductModule,
    ReactiveFormsModule,
    EmployeeModule,
    ShippingModule,
    SharedModule,
    SaleModule,
    BuyModule
  ],
  providers: [
    ProductoService,
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
