module.exports = (req, res, next) => {
    const { username, password } = req.query
    console.log(username, password, req.query, req.body)
    if(username && password && username.length && password.length) {
        next()
    } else {
        res.send('Require both username and password')
    }
    
}
