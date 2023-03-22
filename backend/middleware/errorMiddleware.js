// error handling middleware
const errorHandler = (err, req, res, next) => {

    // Set statuscode to 500 if it isn't set
    const statusCode = res.statusCode ? res.statusCode : 500

    // sets status code
    res.status(statusCode)
    
    // send an error response to the client in JSON format.
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })
}

// export our functions
module.exports = {
    errorHandler
}