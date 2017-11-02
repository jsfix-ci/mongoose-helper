const mongoose = require('mongoose');
// Use native promises
mongoose.Promise = global.Promise;

async function initConnection(uri, options) {
    let defaultOptions = {
        useMongoClient: true,
        /* other options */
    };
    options = options ? Object.assign(defaultOptions, options) : defaultOptions;
    try {
        let connection = await mongoose.createConnection(uri, options);
        console.log('\x1b[32m%s\x1b[0m', `mongoose.createConnection ${uri} Success`);
        return connection;
    } catch (err) {
        console.log('\x1b[31m%s\x1b[0m', `mongoose.createConnection ${uri} Failed`);
        throw err;
    }
}

module.exports = {
    initConnection: initConnection
};