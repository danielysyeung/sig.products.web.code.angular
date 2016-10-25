import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Product } from './Product';

@Injectable()
export class ProductService {

  private productsApiUrl = 'http://localhost:8081/products';  // URL to Products API (Nodejs)
  private productsApiAboutUrl = 'http://localhost:8081/services/products/about';  // URL to About Products API (Nodejs)

  // private productsApiUrl = 'http://localhost:8080/products';  // URL to Products API (Java)
  // private productsApiAboutUrl = 'http://localhost:8080/services/products/about';  // URL to About Products API (Java)

  constructor(private http: Http) { }

  getAll(): Observable<Product[]> {
    return this.http.get(this.productsApiUrl)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  getOne(sku: string): Observable<Product> {
    return this.http.get(this.productsApiUrl + '/' + sku)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  createOne(product: Product): Observable<Product> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(product);
    return this.http.post(this.productsApiUrl, body, options)
      .catch(this.handleError);
  }

  updateOne(sku: string, product: Product): Observable<Product> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(product);
    return this.http.put(this.productsApiUrl + '/' + sku, body, options)
      .catch(this.handleError);
  }

  deleteOne(sku: string): Observable<Product> {
    return this.http.delete(this.productsApiUrl + '/' + sku)
      .catch(this.handleError);
  }

  about(): Observable<string> {
    return this.http.get(this.productsApiAboutUrl)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    let errorMessage = error.message ? error.message : (error.status ? (error.status + ': ' + error.statusText) : 'Server Error');
    console.error(errorMessage);
    return Observable.throw(errorMessage);
  }

  getStatic() {
    return [
      { "sku": "P30001", "name": "Name30001", "description": "Desc30001", "lastUpdatedTimestamp": "2016-10-17T01:30:00.050Z" },
      { "sku": "P30002", "name": "Name30002", "description": "Desc30002", "lastUpdatedTimestamp": "2016-10-18T01:30:00.050Z" },
      { "sku": "P30003", "name": "Name30003", "description": "Desc30003", "lastUpdatedTimestamp": "2016-10-19T01:30:00.050Z" }
    ];
  }
}
