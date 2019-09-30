const path = require("path");

exports.compressJS = (req, res, next) => {
  req.url = req.url + ".gz";
  res.set("Content-Encoding", "gzip");
  next();
};

exports.home = (req, res) => {
  res.sendFile(path.join(__dirname, "../../dist/index.html"), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
};
