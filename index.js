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
        let connection = await /* TODO: JSFIX could not patch the breaking change:
        BREAKING CHANGE: mongoose.connect() returns a promise, removed MongooseThenable #5796
        Suggested fix: Only relevant if you depend on the return value being a reference to the mongoose object. In that case, you need to modify the usages of the return value to get the mongoose object from somewhere else.*/
        mongoose.createConnection(uri, options);
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