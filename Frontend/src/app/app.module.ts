import { ProductModule } from './pages/product/product.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';

import {ProductoService} from './services/producto.service';
import { ListComponent } from './components/shared/list/list.component';
import { AltaComponent } from './components/shared/alta/alta.component';

const PAGES_MODULES = [
  ProductModule
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ListComponent,
    AltaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ProductoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
