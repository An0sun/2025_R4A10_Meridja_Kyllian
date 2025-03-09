import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { ActivatedRoute } from '@angular/router';
import { BooksInMemoryService } from '../../services/book-inmemory.service';
import { BookApiService } from '../../services/book-api.service';

@Component({
  selector: 'app-single-book-page',
  standalone: true,
  imports: [],
  templateUrl: './single-book-page.component.html'
})
export class SingleBookPageComponent implements OnInit {
  book?: Book;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly bookService: BookApiService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bookService.getBookById(id).subscribe((data) => {
      this.book = data;
    });
  }
}
