import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProductoFormComponent } from './components/producto-form/producto-form.component';

import {ProductoService} from './services/producto.service';
import { ListComponent } from './components/shared/list/list.component';
import { AltaComponent } from './components/shared/alta/alta.component';
import { ProductFormComponent } from './pages/product/components/product-form/product-form.component';
import { ProductComponent } from './pages/product/container/product/product.component';
import { ProductListComponent } from './pages/product/components/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProductoFormComponent,
    ListComponent,
    AltaComponent,
    ProductFormComponent,
    ProductComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ProductoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
