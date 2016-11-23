function prepareParams(req, res, next) {

	// https://github.com/edwardhotchkiss/mongoose-paginate
	let options = {};
	let { limit=10, page=1, show } = req.query || {};
	options.limit = +limit;
	options.page = page;

	if (show) {
		options.select = show.split(",").join(" ")
	}

	req.locals = req.locals || {};
	req.locals.queryOptions = options;

	next();

}

module.exports = prepareParams;