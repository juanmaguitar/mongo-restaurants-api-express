function getCursor( queryParams, collection, filter={} ) {

	const { projection, limit, page } = queryParams;

	return collection.find(filter, projection)
											.limit(limit)
											.skip(page);

}

module.exports = getCursor;