import { Component } from '@angular/core';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBike, lucideTimer } from '@ng-icons/lucide';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
@Component({
  selector: 'app-home-seller',
  imports: [HlmIconDirective,NgIcon,CommonModule,ProductCardComponent],
  templateUrl: './home-seller.component.html',
  styleUrl: './home-seller.component.css',
  providers:[provideIcons({lucideTimer,lucideBike})]
})
export class HomeSellerComponent {
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
