import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css',
})
export class PrincipalComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {
    $('.single-select').niceSelect();
  }
}
