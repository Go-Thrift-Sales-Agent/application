/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "fashion-ai",
      // If the stage is "production", the application will be retained; otherwise, it will be removed.
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    await import("./infra/storage");
    await import("./infra/api");
    await import("./infra/web");
  },
});