function rainShout(num){
	let array = [];
    if (num%3 === 0){
	array.push('pling');
    }
	if (num%5 === 0){
	array.push('plang');
    }
	if (num%7 === 0){
	array.push('plong');
    }
	else
if ( num%3 > 0 && num%5 > 0 && num%7 > 0)
	console.log('Raindrop-speak doesn’t know what to make of that');
    
    return array.join('');
    };


module.exports = { rainShout };