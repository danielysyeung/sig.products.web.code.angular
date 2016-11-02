import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Product } from './Product';

@Injectable()
export class ProductService {

  serviceProvider = 'N';
  
  private productsApiUrlNodejs = 'http://localhost:8081/products';  // URL to Products API (Nodejs)
  private productsApiAboutUrlNodejs = 'http://localhost:8081/products/service/about';  // URL to About Products API (Nodejs)

  private productsApiUrlJava = 'http://localhost:8080/products';  // URL to Products API (Java)
  private productsApiAboutUrlJava = 'http://localhost:8080/products/service/about';  // URL to About Products API (Java)

  constructor(private http: Http) { }

  getAll(): Observable<Product[]> {
    // REST call
    return this.http.get(this.getProductsApiUrl())
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  getOne(sku: string): Observable<Product> {
    // REST call
    return this.http.get(this.getProductsApiUrl() + '/' + sku)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  createOne(product: Product): Observable<Product> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(product);
    // REST call
    return this.http.post(this.getProductsApiUrl(), body, options)
      .catch(this.handleError);
  }

  updateOne(sku: string, product: Product): Observable<Product> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(product);
    // REST call
    return this.http.put(this.getProductsApiUrl() + '/' + sku, body, options)
      .catch(this.handleError);
  }

  deleteOne(sku: string): Observable<Product> {
    // REST call
    return this.http.delete(this.getProductsApiUrl() + '/' + sku)
      .catch(this.handleError);
  }

  about(): Observable<string> {
    // REST call
    return this.http.get(this.getProductsApiAboutUrl())
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    let errorMessage = error.status ? (error.status + ': ' + error.statusText) : 'Server Error';
    console.error(errorMessage);
    return Observable.throw(errorMessage);
  }

  getProductsApiUrl(): string {
    if (this.serviceProvider == 'J') {
      return this.productsApiUrlJava;
    } 

    // Default serviceProvider is Node.js.
    return this.productsApiUrlNodejs;
  }

  getProductsApiAboutUrl(): string {
    if (this.serviceProvider == 'J') {
      return this.productsApiAboutUrlJava;
    } 

    // Default serviceProvider is Node.js.
    return this.productsApiAboutUrlNodejs;
  }

}
