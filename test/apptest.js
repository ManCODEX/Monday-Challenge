const assert  = require('chai').assert;
const myapp = require('../myapp.js');

describe('Myapp', function(){
    it('it should return plang', function (){
        assert.equal(myapp.rainShout(5), 'plang');
    });
});


describe('Myapp', function(){
    it('it should return plong', function (){
        assert.equal(myapp.rainShout(7), 'plong');
    });
});


describe('Myapp', function(){
    it('it shouldn return pling', function (){
        assert.equal(myapp.rainShout(3,5,7), 'pling');
    });
});


describe('Myapp', function(){
    it('it should return plingplangplong', function (){
        assert.equal(myapp.rainShout(735), 'plingplangplong');
    });
});

describe('Myapp', function(){
    it('it should return plang', function (){
        assert.equal(myapp.rainShout(5,3,7), 'plang');
    });
});


describe('Myapp', function(){
    it(' it should return plingplangplong', function (){
        assert.equal(myapp.rainShout(735), 'plingplangplong');
    });
});


describe('Myapp', function(){
    it(' it should return plingplang', function (){
        assert.equal(myapp.rainShout(375), 'plingplang');
    });
});



describe('Myapp', function(){
    it('it should return pling', function (){
        assert.equal(myapp.rainShout(3,7,5), 'pling');
    });
});



describe('Myapp', function(){
    it('it should return plong', function (){
        assert.equal(myapp.rainShout(7,3,5), 'plong');
    });
});

describe('Myapp', function(){
    it('it should return plingplong', function (){
        assert.equal(myapp.rainShout(231), 'plingplong');
    });
});
describe('Myapp', function(){
    it('plong', function (){
        assert.equal(myapp.rainShout(14), 'plong');
    });
});

describe('Myapp', function(){
    it('it should return pling', function (){
        assert.equal(myapp.rainShout(24), 'pling');
    });
});
describe('Myapp', function(){
    it('it should return plang', function (){
        assert.equal(myapp.rainShout(1000), 'plang');
    });
});describe('Myapp', function(){
    it('it should return plong', function (){
        assert.equal(myapp.rainShout(24689), 'plong');
    });
});describe('Myapp', function(){
    it('it should return plingplangplong', function (){
        assert.equal(myapp.rainShout(1890), 'plingplangplong');
    });
});