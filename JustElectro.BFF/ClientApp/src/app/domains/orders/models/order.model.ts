export interface OrderLineDto {
  id: number;
  mediaItemId: number;
  title: string;
  quantity: number;
  unitPrice: number;
}

export interface OrderDto {
  id: number;
  status: string;
  createdAt: string;
  lines: OrderLineDto[];
  total: number;
}

export interface CreateOrderLineRequest {
  mediaItemId: number;
  quantity: number;
}

export interface CreateOrderRequest {
  lines: CreateOrderLineRequest[];
}
