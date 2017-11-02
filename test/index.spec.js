const chai = require("chai");
chai.should();

const {initConnection} = require('../index');

describe('index.js', () => {
    it('should export a function', function () {
        initConnection.should.be.a('function');
    });
    describe('initConnection()', () => {
        let port = '27017';
        let wrongPort = '27018';
        it('should return a Connection'); // todo mock database
        it('should throw a err', async () => {
            try {
                let uri = 'mongodb://127.0.0.1:' + wrongPort;
                let connection = await initConnection(uri);
                connection.should.be.null;
            } catch (err) {
                err.message.should.include('failed to connect to server')
            }
        })
    })
});