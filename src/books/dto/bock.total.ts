import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Min }                    from "class-validator";

@ObjectType()
export class Count {
  @Field(type => Int)
  @Min(0)
  total = 0;
}
