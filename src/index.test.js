import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe("Our first test!", () => {
    it('should pass', () => {
        expect(true).to.equal(true);
    });
});

describe('index.html',() => {
    it('Should have h2 that says Users', (done) => {
        const index = fs.readFileSync('./src/index.html',"utf-8");
        jsdom.env(index, function (err, window) {
            const h2 = window.document.getElementsByTagName('h2')[0];
            expect(h2.innerHTML).to.equal("Users");
            done();
            window.close();
        });
    });
});