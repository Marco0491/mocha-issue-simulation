import { expect } from 'chai';
import { foo } from '../src/Core/foo.js';

describe('#foo', function () {
    it('test', function () {
        expect(foo()).to.be.a('HTMLDivElement');
    })
});
