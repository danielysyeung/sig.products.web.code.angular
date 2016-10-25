import { Component, OnInit } from '@angular/core';
import { ProductService } from './ProductService';
import { Product } from './Product';

@Component({
  selector: 'product-list',
  templateUrl: './app/products.html',
  providers: [ProductService]
})

export class ProductComponent implements OnInit {

  errorMessage: string;
  productList: Product[];
  product: Product;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    // this.getAllProducts();
    // this.getOneProduct('P10001');
    
    let product1 = new Product('P20001', 'P20001 Name', 'P20001 Description', null);
    // this.createOneProduct(product1);

    let product2 = new Product('P20001', 'P20001 Name Updated', 'P20001 Description Updated', null);
    this.updateOneProduct('P20001', product2);
    
    // this.deleteOneProduct('P99999');

  }

  getAllProducts() {
    this.productService.getAll().subscribe(p => this.productList = p, e => this.errorMessage = <any>e);
  }

  getOneProduct(sku: string) {
    this.productService.getOne(sku).subscribe(p => this.product = p, e => this.errorMessage = <any>e);
  }

  createOneProduct(product: Product) {        
    this.productService.createOne(product).subscribe(p => this.product = p, e => this.errorMessage = <any>e);
  }

  updateOneProduct(sku: string, product: Product) {
    this.productService.updateOne(sku, product).subscribe(p => this.product = p, e => this.errorMessage = <any>e);
  }

  deleteOneProduct(sku: string) {    
    this.productService.deleteOne(sku).subscribe(p => this.product = p, e => this.errorMessage = <any>e);
  }

}

