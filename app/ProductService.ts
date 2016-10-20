import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Product } from './Product';

@Injectable()
export class ProductService {

  private productsApiUrl = 'http://localhost:8081/products';  // URL to Products API
  
  constructor (private http: Http) { }
  
  getAllStatic() {
	return [
      { "sku": "P30001", "name": "Name30001", "description": "Desc30001", "lastUpdatedTimestamp": "2016-10-17T01:30:00.050Z" }, 
      { "sku": "P30002", "name": "Name30002", "description": "Desc30002", "lastUpdatedTimestamp": "2016-10-18T01:30:00.050Z" }, 
      { "sku": "P30003", "name": "Name30003", "description": "Desc30003", "lastUpdatedTimestamp": "2016-10-19T01:30:00.050Z" } 
    ];
  }
  
  getAll(): Observable<Product[]> {
	return this.http.get(this.productsApiUrl).map((res: Response) => res.json()).catch(this.handleError);
  }
  
  private handleError(error: any) {
    let errMsg = (error.message) ? error.message : error.status ? '${error.status} - ${error.statusText}' : 'Server Error';
    console.error(errMsg);
	return Observable.throw(errMsg);
  }
  
}
