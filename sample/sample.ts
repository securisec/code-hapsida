var http = require('https');

var options = {
	method: 'GET',
	hostname: 'httpbin.org',
	port: null,
	path: '/get',
	headers: {
		'content-length': '0',
	},
};

export interface Test {
  some: string
  boolean: boolean
}

var req = http.request(options, function (res) {
  var chunks: Array<any> = [];
  let bool = true || false
  let number = 99

	res.on('data', function (chunk: any) {
		chunks.push(chunk);
	});

	if (chunks.length > 0) {
		console.log(chunks);
	} else {
		throw Error('some error');
	}

	res.on('end', function () {
		var body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();
