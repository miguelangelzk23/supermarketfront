import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCirclePlus } from '@ng-icons/lucide';
import { BrnSheetComponent, BrnSheetContentDirective, BrnSheetTriggerDirective } from '@spartan-ng/brain/sheet';
import { HlmSheetComponent, HlmSheetContentComponent, HlmSheetHeaderComponent, HlmSheetTitleDirective, HlmSheetDescriptionDirective, HlmSheetFooterComponent } from '@spartan-ng/ui-sheet-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  categoryId: number;
}

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    CommonModule,
    NgIcon,
    HlmIconDirective,
    HlmButtonDirective,
    BrnSheetContentDirective,
    BrnSheetTriggerDirective,
    HlmSheetComponent,
    HlmSheetContentComponent,
    HlmSheetHeaderComponent,
    HlmSheetTitleDirective,
    HlmSheetDescriptionDirective,
    HlmSheetFooterComponent,

  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
  providers:[provideIcons({lucideCirclePlus})],
  host: {
    'ngSkipHydration': 'true'
  }
})
export class ProductCardComponent {
  @Input() product!: Product;

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

  addToCart() {
    // Aquí iría la lógica para agregar al carrito
    console.log('Agregando al carrito:', this.product, 'Cantidad:', this.quantity);
  }
}
