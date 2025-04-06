import { Component } from '@angular/core';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBike, lucideTimer } from '@ng-icons/lucide';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  categoryId: number;
}

interface Category {
  id: number;
  name: string;
  products: Product[];
}

@Component({
  selector: 'app-home-seller',
  imports: [HlmIconDirective,NgIcon,CommonModule,ProductCardComponent],
  templateUrl: './home-seller.component.html',
  styleUrl: './home-seller.component.css',
  providers:[provideIcons({lucideTimer,lucideBike})],
  host: {
    'ngSkipHydration': 'true'
  }
})
export class HomeSellerComponent {
  categories: Category[] = [
    {
      id: 1,
      name: 'Hamburguesas',
      products: [
        {
          id: 1,
          name: 'Hamburguesa Clásica',
          price: 12000,
          image: 'https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp',
          description: 'Deliciosa hamburguesa con carne 100% de res',
          categoryId: 1
        },
        {
          id: 2,
          name: 'Hamburguesa Doble Queso',
          price: 15000,
          image: 'https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp',
          description: 'Hamburguesa doble carne con queso cheddar',
          categoryId: 1
        },
        {
          id: 3,
          name: 'Hamburguesa BBQ',
          price: 14000,
          image: 'https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp',
          description: 'Hamburguesa con salsa BBQ y cebolla caramelizada',
          categoryId: 1
        },
        {
          id: 4,
          name: 'Hamburguesa Vegetariana',
          price: 13000,
          image: 'https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp',
          description: 'Hamburguesa de lentejas con verduras frescas',
          categoryId: 1
        }
      ]
    },
    {
      id: 2,
      name: 'Pizzas',
      products: [
        {
          id: 5,
          name: 'Pizza Margherita',
          price: 18000,
          image: 'https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp',
          description: 'Pizza clásica con tomate y mozzarella',
          categoryId: 2
        },
        {
          id: 6,
          name: 'Pizza Pepperoni',
          price: 20000,
          image: 'https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp',
          description: 'Pizza con pepperoni y queso mozzarella',
          categoryId: 2
        },
        {
          id: 7,
          name: 'Pizza Hawaiana',
          price: 19000,
          image: 'https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp',
          description: 'Pizza con jamón y piña',
          categoryId: 2
        },
        {
          id: 8,
          name: 'Pizza Vegetariana',
          price: 17000,
          image: 'https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp',
          description: 'Pizza con variedad de verduras',
          categoryId: 2
        }
      ]
    }
  ];

  isQuantitySelectorVisible = false; // Controla si el selector de cantidad está visible
  quantity = 1; // Cantidad inicial

  // Muestra el selector de cantidad
  showQuantitySelector() {
    this.isQuantitySelectorVisible = true;
  }

  // Incrementa la cantidad
  increaseQuantity() {
    this.quantity++;
  }

  // Decrementa la cantidad (asegurando que no sea menor a 1)
  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
