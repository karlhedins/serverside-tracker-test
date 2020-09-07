module.exports = {
	version: '1',
	hostname: 'http://localhost:4000',
	batchSize: 10,
	batching: false,
	// this is currently needed in order for debug logging to work
	acceptedParameters: ["pagePath","pageTitle","version","trackingId","customerId","type"]
};
