import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersApiService } from '../../api/orders-api.service';
import { OrderDto } from '../../models/order.model';
import { OrderCardComponent } from '../../ui/order-card/order-card.component';

@Component({
  selector: 'app-orders-list-page',
  standalone: true,
  imports: [CommonModule, OrderCardComponent],
  templateUrl: './orders-list-page.component.html',
})
export class OrdersListPageComponent implements OnInit {
  orders: OrderDto[] = [];
  loading = true;
  error = '';

  constructor(private ordersApi: OrdersApiService) {}

  ngOnInit(): void {
    this.ordersApi.getAll().subscribe({
      next: orders => { this.orders = orders; this.loading = false; },
      error: (err: any) => { this.error = err?.error?.message ?? 'Failed to load orders.'; this.loading = false; }
    });
  }
}
