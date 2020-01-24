'use strict'

module.exports = function (err, req, res, next) {
    // console.log(err.name)
    console.log(err)

    let statusErr, msg
    switch (err.name) {
        case 'ValidationError':
            statusErr= 401
            msg= err.message
            break;
        
        default:
            statusErr= err.status || 500
            msg= err.message || 'server error'
            break;
    }
    // console.log('Masuk sini')
    // console.log(statusErr)
    // console.log(msg)
    res.status(statusErr).json({message: msg})
}