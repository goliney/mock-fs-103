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
        var stat = fs.readdirSync('folder');
        expect(stat).to.be.defined;
    });
});