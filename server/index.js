const express = require("express");
const path = require("path");
const app = express();

// Express Routes
const middleware = require("./routes/middleware-route.js");
const router = require("./routes/index-route.js");

app.use(middleware);
app.use(router);

const port = process.env.PORT || 3030;

// Start server
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
