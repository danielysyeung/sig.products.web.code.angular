import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './AppComponent';
import { ProductListComponent } from './ProductListComponent';

@NgModule({
  imports: [ BrowserModule, HttpModule, JsonpModule ],
  declarations: [ AppComponent, ProductListComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
