// DEPENDENCIES
var path = require("path");

// ROUTING
module.exports = function(app) {
  
  // HTML GET Requests, URL links
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // If no matching route is found then go to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};