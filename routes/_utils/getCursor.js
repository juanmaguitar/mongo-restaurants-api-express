function getCursor( collection, req, filter ) {

	var projection = req.projection;
	var limit = req.limit;
	var page = req.page;

	filter = filter || {};

	if (projection) {
		cursor = collection.find(filter, projection);
	}
	else {
		cursor = collection.find(filter);
	}

	if (limit) {
		cursor = cursor.limit(limit);
		if (page) {
			cursor = cursor.skip(page)
		}
	}

	return cursor;

}

module.exports = getCursor;