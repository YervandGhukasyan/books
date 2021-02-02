import { Module }           from "@nestjs/common";
import { GraphQLModule }    from "@nestjs/graphql";
import { BooksModule }      from "./books/books.module";
import { LoggingPlugin }    from "./common/plugins/logging.plugin";

@Module({
  imports: [
    BooksModule,
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: "schema.gql",
      debug: true,
      playground: true,
      plugins: [
        new LoggingPlugin,
      ]
    })
  ],
})
export class AppModule {
}
