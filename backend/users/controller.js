const userService = require('./service')

exports.getUser = (req, res) => {
    const { username, password } = req.query
    userService.getUser(username, password)
        .then((result) => res.send('found user'))
        .catch(() => res.send('Invalid username or password'))
}

exports.addUser = (req, res) => {
    const { username, password, name, nationality } = req.query
    userService.addUser({username, password, name, nationality})
        .then((result) => {
            res.send('updated')
        })
        .catch(() =>{
            res.send('Something went wrong')
        })
}
