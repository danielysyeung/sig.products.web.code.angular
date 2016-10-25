import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './AppComponent';
import { ProductComponent } from './ProductComponent';

@NgModule({
  imports: [ BrowserModule, HttpModule, JsonpModule ],
  declarations: [ AppComponent, ProductComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
