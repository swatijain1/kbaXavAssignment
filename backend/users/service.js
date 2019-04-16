	const User = require('./schema')

	exports.getUser = (username, password) => {
			return new Promise((resolve,reject) => {
					User.find({username})
							.then(result => {
									console.log(result);
									return resolve()
							})
							.catch(error => {
									console.log(error)
									return reject()
							})
			})    
	}

	exports.addUser = (data) => {
			return new Promise((resolve,reject) => {
					const newUser = new User(data)
					newUser.save()
							.then(result => {
									console.log(result);
									return resolve()
							})
							.catch(error => {
									console.log(error)
									return reject()
							})
			})    
	}
