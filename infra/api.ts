export const api = new sst.aws.ApiGatewayV2("Api", {
  transform: {
    route: {
    }
  },
  cors: true
});

api.route("GET /ai/recommendations", "packages/functions/src/recommendations.main");