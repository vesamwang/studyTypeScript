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

//----------------------- understand private -------------------------
/**
 * 与数据成员是`public`相反，如果数据成员是`private`，那么`TS`就认为他们是不同的类型
 * 比如下面的`A`和`B`他们具有相同的`name`和`constructor`成员且类型相同
 * 但因为`name`是`private`，因此`TS`认为`A`和`B`是不相同的`type`
 */
class A2 {
    private name: string;
    constructor(_name: string) {
        this.name = _name;
    }
}

class B2 {
    private name: string;
    constructor(_name: string) {
        this.name = _name;
    }
}

let a2: A2 = new A2('a');
let b2: B2 = new B2('b');
// Error:(71, 1) TS2322: Type 'B3' is not assignable to type 'A3'.
// Types have separate declarations of a private property 'name'.
// a2 = b2;

//----------------------- understand protected -------------------------
/**
 * 与数据成员是`protected`与数据成员是`protected`相同
 */
class A3 {
    private name: string;
    constructor(_name: string) {
        this.name = _name;
    }
}

class B3 {
    private name: string;
    constructor(_name: string) {
        this.name = _name;
    }
}

let a3: A3 = new A3('a');
let b3: B3 = new B3('b');
// Error:(102, 1) TS2322: Type 'B3' is not assignable to type 'A3'.
// Types have separate declarations of a private property 'name'.
// a3 = b3;

//----------------------- static properties -------------------------
class Grid {
    static name2: string = 'first';
    printName() {
        console.log(Grid.name2);
    }
}
const grid = new Grid();
grid.printName();
Grid.name2 = 'second';
grid.printName();

//----------------------- advance -------------------------
class Greeter {
    static standardGreeting = "Hello, there";
    greeting: string;
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    }
}

let greeter1: Greeter;
greeter1 = new Greeter();
console.log(greeter1.greet());

let greeterMaker: typeof Greeter = Greeter;
greeterMaker.standardGreeting = "Hey there!";

let greeter2: Greeter = new greeterMaker();
console.log(greeter2.greet());

console.log(greeter1.greet());

//----------------------- Using a class as an interface -------------------------
class Point {
    x: number;
    y: number;
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};
