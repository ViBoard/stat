const golos = require("golos-js")

var query = {
	limit: 100
}

var count = 0
var sum = 0

function getCount () {
	var k = 0;
	golos.api.getDiscussionsByCreated(query, function(err, result) {
		for (var i = 0; i < 100; ++i) {
			try {	
				if (result[i].body.includes("yout")) {
					// console.log(result[i])
					++k;
				}
			} catch (e) {}
		}
		sum += k
		count++
		console.log("Last:", k, "Average:", sum/count, "Count:", count)
	});

}

setInterval(getCount, 1000)
