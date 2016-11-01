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
  selectedProduct: Product;
  errorMessage: string;
  aboutUi: string;
  aboutService: string;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.errorMessage = null;
    this.selectedProduct = null;
    this.aboutProductsApi();
    this.getAllProducts();
  }

  // Internal functions

  private getAllProducts() {
    this.productService.getAll().subscribe(pl => {
      this.productList = pl;
    }, e => this.errorMessage = <any>e);
  }

  private getOneProduct(sku: string) {
    this.productService.getOne(sku).subscribe(p => {
      this.selectedProduct = p;
    }, e => this.errorMessage = <any>e);
  }

  private createOneProduct(product: Product) {
    this.productService.createOne(product).subscribe(p => {
      this.getAllProducts();
    }, e => this.errorMessage = <any>e);
  }

  private updateOneProduct(sku: string, product: Product) {
    this.productService.updateOne(sku, product).subscribe(p => {
      this.getAllProducts();
    }, e => this.errorMessage = <any>e);
  }

  private deleteOneProduct(sku: string) {
    this.productService.deleteOne(sku).subscribe(p => {
      this.getAllProducts();
    }, e => this.errorMessage = <any>e);
  }

  private aboutProductsApi() {
    this.aboutUi = '{"Name":"ProductsUI","Version":"0.1","Framework":"Angular2"}';
    this.productService.about().subscribe(r => {
      this.aboutService = JSON.stringify(r);
    }, e => this.errorMessage = <any>e);
  }

  // Functions for view

  select(p: Product): void {
    this.errorMessage = null;
    this.selectedProduct = p;
  }

  refresh(): void {
    this.errorMessage = null;
    this.selectedProduct = null;
    this.getAllProducts();
  }

  add(sku: string, name: string, description: string): void {
    this.errorMessage = null;
    this.selectedProduct = null;
    let p = new Product(sku, name, description, null);
    this.createOneProduct(p);
  }

  update(p: Product): void {
    this.errorMessage = null;
    this.updateOneProduct(p.sku, p);
  }

  delete(p: Product): void {
    this.errorMessage = null;
    this.selectedProduct = null;
    this.deleteOneProduct(p.sku);
  }

}

