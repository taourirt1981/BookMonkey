import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Book} from "../shared/book";
import {Thumbnail} from "../shared/thumbnail";
import {BookStoreService} from "../shared/book-store.service";

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
})
export class BookListComponent implements OnInit {

  books: Book[];
  @Output() showDetailsEvent = new EventEmitter<Book>();

  constructor(private bs: BookStoreService) { }

  showDetails(book: Book) {
    this.showDetailsEvent.emit(book);
  }

  ngOnInit() {
    this.books = this.bs.getAll();
  }
}
