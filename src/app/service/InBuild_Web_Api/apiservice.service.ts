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
        {id:'1',name:'Polo T-Shirt',des:'Drop Shoulder Tshirt for men.',qty:2,category:'fashion',price:200,image:"../../../assets/IMG_20220913_161449.jpg"},
        {id:'3',name:'Cotton T-shirt',des:'Mens Cotton T-shirt regular fit.',qty:2,category:'fashion',price:250   ,image:"../../../assets/IMG_20220913_161512.jpg"},
        {id:'4',name:'Round Neck T-shirt',des:'Mens Regular Round Neck T-shirt.',qty:2,category:'fashion',price:999    ,image:"../../../assets/IMG_20220913_161523.jpg"},
        {id:'5',name:'Half Sleeve T-Shirt',des:'Cotton printed T-shirt.',qty:2,category:'fashion',price:199,image:"../../../assets/IMG_20220913_161542.jpg"},
        {id:'6',name:'Printed T-shirt',des:'Printed colored T-shirt',qty:2,category:'fashion',price:299   ,image:"../../../assets/IMG_20220913_161554.jpg"},
        {id:'7',name:'Full sleeve T-Shirt',des:'Full sleeve Gym T-shirt',qty:2,category:'fashion',price:599    ,image:"../../../assets/fashion1.jpg"},
        {id:'8',name:'Hand Bag',des:'Printed Handbag for Women',qty:2,category:'electronics',price:699,image:"../../../assets/fashion2.jpg"},
        {id:'1',name:'Gold Necklace',des:'Golden Necklace set for Women.',qty:2,category:'jewllery',price:189000    ,image:"../../../assets/jwellery3.jpg"},
        {id:'9',name:'Silver Pendent',des:'Silver Pendent for Women.',qty:2,category:'jewllery',price:1399   ,image:"../../../assets/jwellery1.jpg"},

        {id:'10',name:'Gold Necklace',des:'Goldern Necklace set for women.',qty:2,category:'fashion',price:499    ,image:"../../../assets/jwellery2.jpg"},
        // {id:'11',name:'Peacock Necklace Set',des:'Peacock Necklace set for women',qty:2,category:'electronics',price:499,image:"https://th.bing.com/th/id/OIP.K4VhFvhhDHqA2od_dB3vkgHaJ4?pid=ImgDet&rs=1"},
        {id:'11',name:'Peacock Necklace Set',des:'Peacock Necklace set for women',qty:2,category:'jewllery',price:499,image:"../../../assets/jwellery4.jpg"},
        {id:'12',name:'Pearl Necklace',des:'White pearl necklace',qty:2,category:'jewllery',price:199   ,image:"../../../assets/jwellery5.jpg"},

      ]
    };
  
  }
}