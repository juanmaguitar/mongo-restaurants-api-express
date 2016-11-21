module.exports = {
	'development' : {
		'db' : 'mongodb://localhost:27017/test'
	},
	'production' : {
		'db' : 'mongodb://<%USER_DB%>:<%PASS_DB%>@ds159497.mlab.com:59497/restaurants-ny'
	}
}