
function dec(target, key, index) :any {
	console.log(target);
	console.log(key);
	console.log(index);
}

class Cat {
	constructor(@dec foo) {}
	foo(@dec foo){}
}

let c = new Cat(0);
c.foo(1);
