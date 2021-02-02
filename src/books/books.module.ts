import { Module }          from "@nestjs/common";
import { DateScalar }     from "../common/scalars/date.scalar";
import { BooksResolver } from "./books.resolver";
import { BooksService }  from "./books.service";

@Module({
  providers: [BooksResolver, BooksService, DateScalar]
})
export class BooksModule {
}
