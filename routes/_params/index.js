function filters(req, res, next) {

	var projection = {};
	var fieldsShow, fieldsHide;

	if (req.query && req.query.show) {
		fieldsShow = req.query.show.split(",");
		projection = fieldsShow.reduce(function(acc, item) {
			acc[item] = 1;
			return acc;
		},projection);
	}

	if (req.query && req.query.hide) {
		fieldsHide = req.query.hide.split(",");
		projection = fieldsHide.reduce(function(acc, item) {
			acc[item] = 0;
			return acc;
		},projection);
	}

	if ( !isEmptyObject(projection) ) {
		req.projection = projection;
	}

	if (req.query && req.query.limit) {
		req.limit = +req.query.limit;
	}

	if (req.query && req.query.limit && req.query.page) {
		req.page = +req.query.page;
	}

	next();

}

function isEmptyObject( o ) {
	return Object.keys(o).length === 0 && o.constructor === Object;
}

module.exports = filters;