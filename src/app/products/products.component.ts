import { Component, OnInit } from '@angular/core';
import { DeliveggieServiceService } from 'src/app/services/deliveggie-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  products: any;

  constructor(private deliveggieServiceService: DeliveggieServiceService) { }

  ngOnInit() {
    this.products = this.deliveggieServiceService.getProducts().subscribe((data) => { this.products = data; console.log(data) });
  }
}


//export class ProductsComponent implements OnInit {
//  constructor(private deliveggieServiceService: DeliveggieServiceService) { }
//  ngOnInit() {
//    this.deliveggieServiceService.getProducts().subscribe((data) => { console.log(data) })
//  }
//}
