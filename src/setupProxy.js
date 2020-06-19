const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    [
      "/api",
      "/api/**",
      "/api/**/*",
      "/api/users/**",
      "/auth/google",
      "/api/avatar/*"
    ],
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
};