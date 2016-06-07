const expect = require('chai').expect;
const mock = require('mock-fs');
const fs = require('fs-extra');

describe('Dummy test B', function () {
    before(function () {
        mock({
            folder: {}
        });
    });

    after(function () {
        mock.restore();
    });

    it('should read mocked directory', function () {
        var content = fs.readdirSync('folder');
        expect(content).to.be.an.array;
    });
});