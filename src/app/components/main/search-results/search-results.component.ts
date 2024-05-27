import { Component } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css',
})
export class SearchResultsComponent {
  products: any[] = [
    {
      name: 'Double Cheese Pan',
      description: 'Mounds of golden melting cheese on a rich bed',
      link: '/main/product-details',
      price: 29.36,
      img: '1',
    },
    {
      name: 'Neapolitan Pizza',
      description: 'Mounds of golden melting cheese on a rich bed',
      link: '/main/product-details',
      price: 29.36,
      img: '2',
    },
    {
      name: 'Burger Ferguson',
      description: 'Mounds of golden melting cheese on a rich bed',
      link: '/main/product-details',
      price: 29.36,
      img: '3',
    },
    {
      name: 'Gyoza',
      description: 'Mounds of golden melting cheese on a rich bed',
      link: '/main/product-details',
      price: 29.36,
      img: '4',
    },
    {
      name: 'Burger Smokehouse',
      description: 'Mounds of golden melting cheese on a rich bed',
      link: '/main/product-details',
      price: 29.36,
      img: '5',
    },
  ];
}
