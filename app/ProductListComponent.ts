import { Component, OnInit } from '@angular/core';
import { ProductService } from './ProductService';
import { Product } from './Product';

@Component({
  selector: 'product-list',
  templateUrl: './app/products.html',
  providers: [ProductService]
})

export class ProductListComponent implements OnInit { 
  
  errorMessage: string;
  products: Product[];
  
  constructor(private productService : ProductService) { }
  
  ngOnInit() { 
    this.getProducts();
  }
  
  getProducts() {
	this.productService.getAll().subscribe(p => this.products = p, e => this.errorMessage = <any>e);
  }
  
  /*
  getStaticProducts() {
	this.products = this.productService.getAllStatic();
	this.errorMessage = '';
  }
  */
}

