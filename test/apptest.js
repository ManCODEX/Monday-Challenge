const assert  = require('chai').assert;
const myapp = require('../myapp.js');

describe('Myapp', function(){
    it('app should return hello', function (){
        assert.equal(myapp.rainShout(5), 'plang');
    });
});


describe('Myapp', function(){
    it('app should return hello', function (){
        assert.equal(myapp.rainShout(7), 'plong');
    });
});


describe('Myapp', function(){
    it('app should return hello', function (){
        assert.equal(myapp.rainShout(3,5,7), 'pling');
    });
});


describe('Myapp', function(){
    it('app should return hello', function (){
        assert.equal(myapp.rainShout(735), 'plingplangplong');
    });
});

describe('Myapp', function(){
    it('app should return hello', function (){
        assert.equal(myapp.rainShout(5,3,7), 'plang');
    });
});


describe('Myapp', function(){
    it('app should return hello', function (){
        assert.equal(myapp.rainShout(735), 'plingplangplong');
    });
});


describe('Myapp', function(){
    it('app should return hello', function (){
        assert.equal(myapp.rainShout(375), 'plingplang');
    });
});



describe('Myapp', function(){
    it('app should return hello', function (){
        assert.equal(myapp.rainShout(3,7,5), 'pling');
    });
});



describe('Myapp', function(){
    it('app should return hello', function (){
        assert.equal(myapp.rainShout(7,3,5), 'plong');
    });
});

describe('Myapp', function(){
    it('app should return hello', function (){
        assert.equal(myapp.rainShout(3), 'pling');
    });
});


