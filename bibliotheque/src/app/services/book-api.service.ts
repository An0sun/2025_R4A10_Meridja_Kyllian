import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class BookApiService {
  private readonly API_URL = 'http://localhost:5000';
  private readonly BASE_ENDPOINT = this.API_URL + '/books';
  constructor(private readonly http: HttpClient) {}

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.BASE_ENDPOINT);
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(this.BASE_ENDPOINT + '/' + id);
  }

  createBook(book: Omit<Book, 'id' | 'coverUrl'>): Observable<Book> {
    return this.http.post<Book>(this.BASE_ENDPOINT, book);
  }

  deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(this.BASE_ENDPOINT);
  }
}
