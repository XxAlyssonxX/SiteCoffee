import { Injectable } from '@angular/core';
import { Iproducts } from './iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Iproducts[] =[
    {id: 1, name: 'Café', price: 5.0, image_url: './copoCafe.png', filter: 'popular', rating: '⭐⭐⭐⭐'},
    {id: 2, name: 'Café', price: 5.0, image_url: './coffeeIce.png', filter: 'popular', rating: '⭐⭐⭐⭐⭐'},
    {id: 3, name: 'Café', price: 5.0, image_url: './coffeeMocca.png', filter: 'popular', rating: '⭐⭐⭐'},
    {id: 4, name: 'Café', price: 5.0, image_url: './image.png', filter: 'popular', rating: '⭐⭐⭐⭐'}
  ];
  
  getProducts(): Iproducts[]{
    return this.products;
  }

}
  

