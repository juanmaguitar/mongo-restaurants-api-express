function prepareParams(req, res, next) {

	// https://github.com/edwardhotchkiss/mongoose-paginate
	let options = {};
	let { limit=10, page=1, show, hide } = req.query || {};

	options.limit = +limit;
	options.page = page;
  options.select = "";

  // http://mongoosejs.com/docs/api.html#query_Query-select
	if (show) {
		options.select += show.split(",").join(" ")
	}

  if (hide) {
    options.select += " " + hide.split(",").map(field => `-${field}` ).join(" ")
  }

	req.locals = req.locals || {};
	req.locals.queryOptions = options;

	next();

}

module.exports = prepareParams;