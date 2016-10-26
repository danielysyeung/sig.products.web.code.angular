import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './AppComponent';
import { ProductComponent } from './ProductComponent';

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, ProductComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
