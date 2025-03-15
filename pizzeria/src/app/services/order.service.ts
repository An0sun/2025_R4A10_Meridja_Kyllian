import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CreateOrder, Order } from '../models/order';
import { OrderService } from '../order-service.interface';

@Injectable({
  providedIn: 'root',
})
export class OrderLocalService implements OrderService {
  private ordersSubject = new BehaviorSubject<Order[]>([
    {
      id: '0123456',
      paymentMethod: 'Bitcoin',
      pizza: 'Margherita',
      email: 'mario@luigi-family.com',
      size: 'XL',
    },
  ]);

  private orders$ = this.ordersSubject.asObservable(); 

  findMany(): Observable<Order[]> {
    return this.orders$; 
  }

  create(data: CreateOrder): Observable<Order> {
    const newOrder: Order = { ...data, id: Math.random().toString().replace('.', '') };
    const updatedOrders = [...this.ordersSubject.getValue(), newOrder];

    this.ordersSubject.next(updatedOrders); 
    return new Observable<Order>(observer => {
      observer.next(newOrder);
      observer.complete();
    });
  }

  remove(id: string): void {
    const updatedOrders = this.ordersSubject.getValue().filter(order => order.id !== id);
    this.ordersSubject.next(updatedOrders); 
  }
}
