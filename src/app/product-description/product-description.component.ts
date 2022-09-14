import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessService } from '../service/Product_Add_Messanger/mess.service';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  constructor(public activeRoute:ActivatedRoute, public service:ServiceService, private _msgser:MessService) { }

  product:any = {}
  ngOnInit(): void {
    console.log(this.activeRoute.snapshot.paramMap.get('id'))
    this.service.getProductsApibyId(this.activeRoute.snapshot.paramMap.get('id')!).subscribe((data)=>{
      if(data){
        console.log(data)
        this.product = data
        console.log(this.product)
      }
    })
    // this.name = this.activeRoute.snapshot.get('id')
    // this.service.getMsg().subscribe(data => {
    //   this.product = data
    // })

    // console.log(this.product)
  }

// padded=false
// @Input() proitem:any=[]


  handleaddtocart(){
    this._msgser.sendMsg(this.product)
    // this.padded=!this.padded
  }


}
