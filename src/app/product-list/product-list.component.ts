import { Component, OnInit } from '@angular/core';
import { products } from '../data/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products = products;

  constructor() {

  }
  ngOnInit(): void {
  }

}
