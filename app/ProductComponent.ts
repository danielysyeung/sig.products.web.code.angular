import { Component, OnInit } from '@angular/core';
import { ProductService } from './ProductService';
import { Product } from './Product';

@Component({
  selector: 'product-list',
  templateUrl: './app/products.html',
  providers: [ProductService]
})

export class ProductComponent implements OnInit {

  productList: Product[];
  product: Product;
  errorMessage: string;
  aboutUi: string;
  aboutService: string;

  constructor(private productService: ProductService) { }

  ngOnInit() {

    this.aboutProductsApi();

    // this.getAllProducts();
    // this.getOneProduct('P10001');
    
    let product1 = new Product('P20001', 'P20001 Name', 'P20001 Description', null);
    // this.createOneProduct(product1);

    let product2 = new Product('P20001', 'P20001 Name Updated', 'P20001 Description Updated', null);
    this.updateOneProduct('P20001', product2);
    
    // this.deleteOneProduct('P99999');

  }

  getAllProducts() {
    this.productService.getAll().subscribe(pl => this.productList = pl, e => this.errorMessage = <any>e);
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

  aboutProductsApi() {
    this.aboutUi = '{"Name":"ProductsUI","Version":"0.1","Framework":"Angular2"}';
    this.productService.about().subscribe(r => this.aboutService = JSON.stringify(r), e => this.errorMessage = <any>e);
  }

}

