let getCursor = require('./getCursor');

function prepareParams(req, res, next) {

	let projection = {};
	let { limit=10, page=1, show, hide } = req.query || {};
	limit = +limit;
	page = page-1;
	page = ( limit * page );

	if (show) {
		projection = show.split(",").reduce(function(acc, item) {
			acc[item] = 1;
			return acc;
		},projection);
	}

	if (hide) {
		projection = hide.split(",").reduce(function(acc, item) {
			acc[item] = 0;
			return acc;
		},projection);
	}

	const queryParams = { projection, limit, page }

	req.locals = req.locals || {};
	req.locals.getCursor = getCursor.bind(null, queryParams)

	next();

}

module.exports = prepareParams;