
/**
 * multiple decorator order:
 * 1. The expression for each decorator are evluated top-to-bottom.
 * 2. The results are then called as functions from bottom-to-top.
 */

function f() {
    console.log("f(): evaluated");
    return function(target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("f(): called");
    }
}

function g() {
    console.log("g(): evaluated");
    return function(target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("g(): called");
    }
}

class C {
    @f()
    @g()
    method() {
        console.log("method(): called");
    }
}

const c = new C();
c.method();
