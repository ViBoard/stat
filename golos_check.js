var golos = require("golos-js")


var query = {
  limit: 100
}
var k = 0;
golos.api.getDiscussionsByHot(query, function(err, result) {
  for (var i = 0; i < 100; ++i) {
    if (result[i].body.includes("yout")) {
      console.log(result[i])
      ++k;
    }
  }
  console.log(k)
});