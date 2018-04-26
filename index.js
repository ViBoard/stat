const golos = require("golos-js")

var query = {
	limit: 100
}

var count_yout = 0
var sum_yout = 0
var count_iframe = 0
var sum_iframe = 0

function getCount () {
	var k = 0;
	var t = 0;
	golos.api.getDiscussionsByCreated(query, function(err, result) {
		for (var i = 0; i < 100; ++i) {
			try {
				if (result[i].body.includes("yout")) {
					// console.log(result[i])
					++k;
				}
				if (result[i].body.includes("iframe")) {
					// console.log(result[i])
					++t;
				}
			} catch (e) {}
		}
		sum_yout += k
		count_yout++
		sum_iframe += t
		count_iframe++
		console.log("'yout/iframe':", k, t, "Avg:", sum_yout/count_yout, sum_iframe/count_iframe, "Count:", count_yout, count_iframe)
	});

}

setInterval(getCount, 1000)
