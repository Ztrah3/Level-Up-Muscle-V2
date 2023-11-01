import { Component } from '@angular/core';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent {
  products = [
    {name: 'Workout Plan 1', description: 'Description 1', price: '\$10'},
    {name: 'Workout Plan 2', description: 'Description 2', price: '\$20'},
    {name: 'Workout Plan 3', description: 'Description 3', price: '\$30'},
    // Add more products as needed
  ];
}
