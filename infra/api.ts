import { secret } from "./storage";

// Create a new API Gateway V2 instance using the Serverless Stack (SST) framework.
export const api = new sst.aws.ApiGatewayV2("Api", {
  transform: {
    route: {
      handler: {
        link: [secret],
      }
    }
  },
  // Enable Cross-Origin Resource Sharing (CORS) for this API, allowing it to be accessed from different domains.
  cors: true
});

// The route listens for GET requests at the path "/ai/recommendations" and maps them to the `main` function
api.route("GET /ai/recommendations", "packages/functions/src/recommendations.main");