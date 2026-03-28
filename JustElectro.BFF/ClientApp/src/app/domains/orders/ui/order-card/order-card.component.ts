import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDto } from '../../models/order.model';

@Component({
  selector: 'app-order-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-card.component.html',
})
export class OrderCardComponent {
  @Input() order!: OrderDto;
}
