/**
 * Created by 720718 on 2016/7/28.
 */

/**
 * 在Class中的`public` `private` `protect`
 * 仅在`TS`编译时有意义，编译成的js文件并不受约束
 */
class Animal {
    constructor(private name: string, public age: number) { }
}
const animal = new Animal('cat', 8);
// console.log(animal.name, animal.age); // Error:(13, 13) TS2341: Property 'name' is private and only accessible within class 'Animal'.
/**
 * 上面的代码编译成es5是这个样子的(`animal.name`这段编译成es5后被注释了 防止IDE报错)
 * 并不受`public` `private` `protect`影响
 *
var Animal = (function () {
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    return Animal;
}());
var animal = new Animal('cat', 8);
console.log(animal.name, animal.age);
 */

//----------------------- understand public -------------------------
/**
 * 只要`public`成员的类型相同，那么`TS`就认为他们是相同的类型
 * 比如下面的`A`和`B`他们具有相同的`name`和`constructor`成员且类型相同
 * 因此`TS`认为`A`和`B`是相同的`type`
 */

class A {
    name: string;
    constructor(_name: string) {
        this.name = _name;
    }
}

class B {
    name: string;
    constructor(_name: string) {
        this.name = _name;
    }
}

let a: A = new A('a');
let b: B = new B('b');
a = b;


