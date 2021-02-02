import { Field, ID, ObjectType }          from "@nestjs/graphql";

@ObjectType()
export class Library {
  @Field(type => ID)
  id: string;

  @Field()
  title: string;
}
