import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class NewBookInput {
  @Field()
  title: string;

}
