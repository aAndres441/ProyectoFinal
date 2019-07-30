import { ProductModule } from './pages/product/product.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductoService} from './services/producto.service';
import { ThemeModule } from './theme/theme.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const PAGES_MODULES = [
  ProductModule,
  ThemeModule
];

@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ...PAGES_MODULES
  ],
  providers: [
    ProductoService
  ],
  bootstrap: [AppComponent],
  schemas :[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
