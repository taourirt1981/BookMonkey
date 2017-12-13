import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from "../shared/book";

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html'
})
export class BookDetailsComponent {

  @Input() book: Book;
  @Output() showListEvent = new EventEmitter<any>();

  showBookList() {
    this.showListEvent.emit();
  }

  getRating(num: Number) {
    return new Array(num);
  }
}
