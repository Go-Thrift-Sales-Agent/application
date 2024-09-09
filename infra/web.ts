import { api } from "./api";

const region = aws.getRegionOutput().name;

// Create a new Static Site instance using the Serverless Stack (SST) framework.
export const frontend = new sst.aws.StaticSite("Frontend", {
  path: "packages/frontend",
  // Configuration for the build process of the static site.
  build: {
    output: "dist",
    command: "npm run build",
  },
  // Environment variables to be made available to the static site.
  environment: {
    VITE_REGION: region,
    VITE_API_URL: api.url,
  },
});