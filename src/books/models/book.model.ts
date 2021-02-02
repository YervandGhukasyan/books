import { Field, ID, ObjectType }          from "@nestjs/graphql";

import { Library } from "./library.model";

@ObjectType()
export class Book {
  @Field(type => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  created: Date;

  @Field()
  libraryId: String;

  @Field()
  library: Library;
}
