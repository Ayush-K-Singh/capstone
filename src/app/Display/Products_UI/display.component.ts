import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Subject } from "rxjs";
import { Product } from "../../Models/product";
import { MessService } from "../../service/Product_Add_Messanger/mess.service";
import { ServiceService } from "../../service/service.service";
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector:'dis',
    templateUrl:'./display.component.html',
    styleUrls:['display.component.css'],
    providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers

})
export class Displaydata{

 

  src:string='All products';
  update:string=''
subject$=new Subject();
Products:any[]=[];
product:any=[]
srcProd:string='';
clickvalue=''

    constructor(private _http:HttpClient,private _fb:FormBuilder,
      private _service:ServiceService,private msg:MessService, config: NgbCarouselConfig){
        config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
      }

      filtersform!:FormGroup
ngOnInit(){
    
this._service.getProducts().subscribe((data:any)=>{
  this.Products=data;
});


this.msg.subject$.subscribe((data:Product[])=>{
  this.Products=data
  this.Products.forEach(e=>{
    this.srcProd=e.name

  })
  this.srcProd=''
  console.log(data)
})


this.filtersform=this._fb.group({
  from:[''],
  to:['']
});
}
send(data:Product){
  this._service.s$.next(data);
}
categorySelection1(cat:string){
  this.src=cat
  if(this.filtersform.invalid)
  {this.clickvalue=cat
    if(cat==='All Products')
    {
      this._service.getProducts().subscribe((data:Product[])=>{
        this.Products=data
      });
     console.log('true   all')
    
    }
    else if(cat!='All Products')
{  this.src=cat
   this._service.getProducts().subscribe((data:Product[])=>{
         this.Products=data.filter(x=>x.category==cat)
         });
         console.log(' category')
  
}
  }           

  else 
  { this.update=cat
    console.log('false else')
  this.filtersform.reset()
  if(this.update==='All Products')
  {
    this._service.getProducts().subscribe((data:Product[])=>{
      this.Products=data
    });
   console.log('else  all')
  
  }
  else if(cat!='All Products')
{  this.src=cat
 this._service.getProducts().subscribe((data:Product[])=>{
       this.Products=data.filter(x=>x.category==cat)
       });
       console.log(' else category')

}
  
  }
}    

onSubmit(){
  this.update=this.clickvalue
  if(this.update==='All Products')
  {
    this._service.getProducts().subscribe((data:Product[])=>{
       this.Products=data.filter(x=>x.price >= this.filtersform.controls['from'].value && x.price <= this.filtersform.controls['to'].value)})
      // this.Products=data.filter(x=>x.price >= this.from && x.price <= this.to)})  
      console.log(this.Products)
  
  }
  else
  {
    this._service.getProducts().subscribe((data:Product[])=>{
      this.Products=data.filter(   x=>x.price >= this.filtersform.controls['from'].value && x.price <= this.filtersform.controls['to'].value &&x.category==this.update) })
        console.log(this.Products)
        
        
  }
  
  // 
  }

}