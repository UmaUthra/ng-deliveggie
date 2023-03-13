import { Component, OnInit } from '@angular/core';
import { DeliveggieServiceService } from 'src/app/services/deliveggie-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  products = null;
  product: any = {};
  selectedProduct: any;

  constructor(private deliveggieServiceService: DeliveggieServiceService) { }

  ngOnInit() {
    this.deliveggieServiceService.getProducts().subscribe((data) => { this.products = data; console.log(data) });
  }
  onSelectProduct(id: any) { this.selectedProduct = id; console.log(this.selectedProduct) }

  onSelect(id: any) {
    this.selectedProduct = id; console.log(this.selectedProduct);
    this.deliveggieServiceService.getProductById(this.selectedProduct).subscribe((data) => { debugger; this.product = data; console.log(data) });
     }

}
