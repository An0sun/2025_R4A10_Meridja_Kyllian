import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BookApiService } from '../../services/book-api.service';
import { Book } from '../../models/book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-book-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-book-page.component.html'
})
export class CreateBookPageComponent {
  constructor(
    private readonly bookService: BookApiService,
    private readonly router: Router
  ) {}

  createBookForm = new FormGroup({
    author: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(50),
    ]),
    description: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(255),
    ]),
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(35),
    ]),
  });

  onSubmit() {
    this.bookService.createBook(this.createBookForm.value as Book).subscribe({
      complete: () => this.router.navigateByUrl('/'),
    });
  }

  get author() {
    return this.createBookForm.get('author');
  }

  get title() {
    return this.createBookForm.get('title');
  }

  get description() {
    return this.createBookForm.get('description');
  }
}
