import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateOrder, Order } from '../models/order';
import { OrderService } from '../order-service.interface';

@Injectable({
  providedIn: 'root',
})
export class OrderAPIService implements OrderService {
  private readonly API_URL = 'http://localhost:5000/api/orders';

  constructor(private http: HttpClient) {}

  findMany(): Observable<Order[]> {
    return this.http.get<Order[]>(this.API_URL);
  }

  create(data: CreateOrder): Observable<Order> {
    return this.http.post<Order>(this.API_URL, data);
  }

  remove(id: string): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`);
  }
}
