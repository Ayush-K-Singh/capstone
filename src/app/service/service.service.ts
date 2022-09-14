import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ReplaySubject } from 'rxjs';
import { Product } from '../Models/product';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
userurl:string='api/product';
s$=new Subject();
uniquepro:any
constructor(private _http:HttpClient) { }

getProducts():Observable<Product[]>{
  return this._http.get<Product[]>(this.userurl)
}

getProductsApibyId(id:string):Observable<any>{
  let subject = new ReplaySubject();
  this._http.get<Product[]>(this.userurl).subscribe((data)=>{
    this.uniquepro = data.find(x=>x.id==id);
    subject.next(this.uniquepro);
    console.log(this.uniquepro);
    subject.complete();
  })
  return subject;
}
 
};
