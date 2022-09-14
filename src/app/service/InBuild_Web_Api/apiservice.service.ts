import { Injectable } from '@angular/core';
import{InMemoryDbService, RequestInfo} from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService implements InMemoryDbService{
  
  constructor() { }
  createDb() {
    return{
      product:[
        {id:'1',name:'prod1',des:'nice product',qty:2,category:'fashion',price:40    ,image:"https://th.bing.com/th/id/OIP.K4VhFvhhDHqA2od_dB3vkgHaJ4?pid=ImgDet&rs=1"},
        {id:'2',name:'prod2',des:'nice product',qty:2,category:'electronics',price:60,image:"https://th.bing.com/th/id/OIP.K4VhFvhhDHqA2od_dB3vkgHaJ4?pid=ImgDet&rs=1"},
        {id:'3',name:'prod3',des:'nice product',qty:2,category:'jewllery',price:80   ,image:"https://th.bing.com/th/id/OIP.K4VhFvhhDHqA2od_dB3vkgHaJ4?pid=ImgDet&rs=1"},

        {id:'4',name:'prod4',des:'nice product',qty:2,category:'fashion',price:65    ,image:"https://th.bing.com/th/id/OIP.K4VhFvhhDHqA2od_dB3vkgHaJ4?pid=ImgDet&rs=1"},
        {id:'5',name:'prod5',des:'nice product',qty:2,category:'electronics',price:199,image:"https://th.bing.com/th/id/OIP.K4VhFvhhDHqA2od_dB3vkgHaJ4?pid=ImgDet&rs=1"},
        {id:'6',name:'prod6',des:'nice product',qty:2,category:'jewllery',price:100   ,image:"https://th.bing.com/th/id/OIP.K4VhFvhhDHqA2od_dB3vkgHaJ4?pid=ImgDet&rs=1"},

        {id:'7',name:'prod7',des:'nice product',qty:2,category:'fashion',price:299    ,image:"https://th.bing.com/th/id/OIP.K4VhFvhhDHqA2od_dB3vkgHaJ4?pid=ImgDet&rs=1"},
        {id:'8',name:'prod8',des:'nice product',qty:2,category:'electronics',price:99,image:"https://th.bing.com/th/id/OIP.K4VhFvhhDHqA2od_dB3vkgHaJ4?pid=ImgDet&rs=1"},
        {id:'9',name:'prod9',des:'nice product',qty:2,category:'jewllery',price:399   ,image:"https://th.bing.com/th/id/OIP.K4VhFvhhDHqA2od_dB3vkgHaJ4?pid=ImgDet&rs=1"},

        {id:'10',name:'prod10',des:'nice product',qty:2,category:'fashion',price:499    ,image:"https://th.bing.com/th/id/OIP.K4VhFvhhDHqA2od_dB3vkgHaJ4?pid=ImgDet&rs=1"},
        {id:'11',name:'prod11',des:'nice product',qty:2,category:'electronics',price:499,image:"https://th.bing.com/th/id/OIP.K4VhFvhhDHqA2od_dB3vkgHaJ4?pid=ImgDet&rs=1"},
        {id:'12',name:'prod12',des:'nice product',qty:2,category:'jewllery',price:199   ,image:"https://th.bing.com/th/id/OIP.K4VhFvhhDHqA2od_dB3vkgHaJ4?pid=ImgDet&rs=1"},

      ]
    };
  
  }
}