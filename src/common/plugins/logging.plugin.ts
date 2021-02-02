import { Plugin }                                                                                                                from "@nestjs/graphql";
import { ApolloServerPlugin, BaseContext, GraphQLRequestContext, GraphQLRequestContextWillSendResponse, GraphQLRequestListener } from "apollo-server-plugin-base";

@Plugin()
export class LoggingPlugin implements ApolloServerPlugin {
  requestDidStart(requestContext: GraphQLRequestContext<BaseContext>): GraphQLRequestListener {
    console.log("Request started");
    return {
      willSendResponse(requestContext: GraphQLRequestContextWillSendResponse<BaseContext>) {
        console.log("Will send response");
      },
    };
  }
}
