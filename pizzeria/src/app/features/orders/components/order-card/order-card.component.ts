import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Order } from '../../../../models/order';

@Component({
  selector: 'app-order-card',
  standalone: true,
  imports: [],
  templateUrl: './order-card.component.html',
  styleUrl: './order-card.component.css',
})
export class OrderCardComponent implements OnChanges {
  @Input() order!: Order; 
  @Output() deleteOrder = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['order'] && changes['order'].currentValue) {
      console.log('Mise à jour de la commande :', this.order);
    }
  }

  removeOrder(): void {
    if (this.order) {
      this.deleteOrder.emit(this.order.id);
    }
  }
}
