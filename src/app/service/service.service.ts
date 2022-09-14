import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from '../Models/product';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
userurl:string='api/product';
s$=new Subject();
constructor(private _http:HttpClient) { }

getProducts():Observable<Product[]>{
  return this._http.get<Product[]>(this.userurl)
}

 
};
