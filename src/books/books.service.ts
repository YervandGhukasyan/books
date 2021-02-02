import { Injectable } from "@nestjs/common";
import { Book }       from "./models/book.model";

import * as mocks       from "./mock.json";
import { Library }      from "./models/library.model";
import { NewBookInput } from "./dto/new-book.input";

@Injectable()
export class BooksService {
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

  constructor() {
  }

  search(search?: string): Book[] {
    const founded = (mocks.books as unknown as Book[]).filter(book => {
        return search && book.title.includes(search);
      }
    );
    return (founded.length > 0 && founded || (mocks.books as unknown as Book[])).map(value => {
      value.library = (mocks.libraries as unknown as Library[]).find(library => library.id === value.libraryId);
      return value;
    }) || [] as Book[];
  }

  calculate(fromDate?: number): { total: number } {
    const date = new Date(fromDate);
    const total = (mocks.books as unknown as Book[]).filter(book => {
        return date <= book.created;
      }
    );
    return { total: total.length };
  }

  change(id: string, input: NewBookInput): Book {
    return <Book> (mocks.books as unknown as Book[])
      .reduce((previousValue, currentValue, currentIndex, array) => {
        if (currentValue.id === id) {
          array[currentIndex] = { ...currentValue, ...previousValue };
          return array[currentIndex];
        }
      }, input);
  }
}
