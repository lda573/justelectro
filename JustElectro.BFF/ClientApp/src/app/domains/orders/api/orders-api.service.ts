import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderDto, CreateOrderRequest } from '../models/order.model';

@Injectable({ providedIn: 'root' })
export class OrdersApiService {
  private readonly baseUrl = '/api/orders';

  constructor(private http: HttpClient) {}

  getAll(): Observable<OrderDto[]> {
    return this.http.get<OrderDto[]>(this.baseUrl);
  }

  getById(id: number): Observable<OrderDto> {
    return this.http.get<OrderDto>(`${this.baseUrl}/${id}`);
  }

  create(request: CreateOrderRequest): Observable<OrderDto> {
    return this.http.post<OrderDto>(this.baseUrl, request);
  }
}
