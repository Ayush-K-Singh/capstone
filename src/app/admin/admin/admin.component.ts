import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  productForm = new FormGroup({
    productName: new FormControl('',[Validators.required]),
    description: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.min(1)]),
    category: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    modeOfPayment: new FormControl('', [Validators.required]),
    fastDelivery: new FormControl('', [Validators.required]),
  })

  onSubmit() {
    // this.imageUrl = this.productForm.value['image']
    console.log(this.productForm.value);
  }


}
