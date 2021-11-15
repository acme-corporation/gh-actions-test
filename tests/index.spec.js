const index = require('../');
const { version } = require('../package.json');

describe('index', () => {
    it('returns correct version', () => {
        expect.assertions(1);
        expect(index()).toStrictEqual(version);
    });
});
