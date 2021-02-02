import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Book }                            from "./models/book.model";
import { BooksService }                    from "./books.service";
import { Count }                           from "./dto/bock.total";
import { NewBookInput }                    from "./dto/new-book.input";

@Resolver(() => Book)
export class BooksResolver {
  constructor(private readonly bookService: BooksService) {
  }

  @Query(() => [Book])
  books(@Args("search", {
    nullable: true,
    defaultValue: null
  }) search?: string): Book[] {
    return this.bookService.search(search);
  }

  @Query(() => Count)
  count(@Args("fromDate") fromDate?: number): { total: Number } {
    return this.bookService.calculate(fromDate);
  }

  @Mutation(() => Book)
  async change(
    @Args("id") id: string,
    @Args("input") input: NewBookInput,
  ) {
    return this.bookService.change(id, input);
  }
}
