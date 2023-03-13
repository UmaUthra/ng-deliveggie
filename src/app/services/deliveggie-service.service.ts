import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DeliveggieServiceService {
  pdtid: any;
  constructor(private http:HttpClient) {
  }
  getProducts(): Observable<any> {
    return this.http.get("http://localhost:5004/gateway/product")
  }
  getProductById(id: any): Observable<any> {
    console.log('val' + id);
    this.pdtid = id;
    return this.http.get("http://localhost:5004/gateway/product/"+id)
  }
}
