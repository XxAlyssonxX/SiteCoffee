import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../model/services/products.service';
import { Iproducts } from '../model/services/iproducts';


@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  providers: [ProductsService],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent implements OnInit {
  constructor(private productsService:ProductsService){}
  products: Iproducts[] = [];

  ngOnInit(): void {
      this.products = this.productsService.getProducts();
  }

  selectedFilter: string = 'All';  // Inicialmente, "All" é o filtro selecionado

  // Método para selecionar um filtro
  selectFilter(filter: string) {
    this.selectedFilter = filter;  // Atualiza o filtro selecionado
  }
}


