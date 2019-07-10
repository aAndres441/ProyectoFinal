import { ProductModule } from './pages/product/product.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';

import {ProductoService} from './services/producto.service';
import { ListComponent } from './components/shared/list/list.component';
import { AltaComponent } from './components/shared/alta/alta.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ListComponent,
    AltaComponent,
    ProductModule
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
