


// TESTS (Normally you'd have to write these yourself! But a magical elf left these for you...)

// You should be able to remove elements from an array.

describe("splice", function(){
	it("removes items from array", function(){
		expect(splice(['a','b','c','d','e'], 2, 2)).toEqual(['a','b','e']);
	});
});


describe("splice", function(){
	
	it("leaves original array unchanged", function(){
		var a; 
		a = ['a','b','c','d','e'];
		splice(a, 2, 2)
		expect(a).toEqual(['a','b','c','d','e']);
	});
});

describe("splice", function(){
	it("insert an item with fourth argument", function(){
		expect(splice(['a','b','c','d','e'], 1, 2, 'z')).toEqual(['a','z','d','e']);
	});
});

describe("splice", function(){
	it("insert elements without removing anything", function(){
		expect(splice(['a','b','c','d','e'], 1, 0, 'z')).toEqual(['a','z','b','c','d','e']);
	});
});

describe("splice", function(){
	it("insert elements at an arbitrarily high index - just at the end", function(){
		expect(splice(['a','b','c'], 99, 0, 'z')).toEqual(['a','b','c','z']);
	});
});

describe("splice", function(){
	it("insert elements at an arbitrarily high index - just at the end", function(){
		expect(splice(['a','b','c'], 99, 1, 'z')).toEqual(['a','b','c','z']);
	});
});

describe("splice", function(){
	it("insert an arbitrary number of values using multiple arguments", function(){
		expect(splice(['a','b','c'], 99, 1, 'x','y','z')).toEqual(['a','b','c','x','y','z']);
	});
});



// The original array should remain unchanged (pure function).
var a = ['a','b','c','d','e'];
splice(a, 2, 2);
assertArraysEqual(a,  ['a','b','c','d','e']);
