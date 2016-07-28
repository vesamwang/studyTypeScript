/**
 * Created by 720718 on 2016/7/25.
 */

interface LabelValue {
    label: string;
}

function printLabel(labelObj: LabelValue) {
    console.log(labelObj.label);
}

export default function interfaces() {
    let obj = {label: "label", size: 20};
    printLabel(obj);
    // printLabel({label: "label", size: 20}); // ts编译报错
    let obj2: LabelValue;
    obj2 = obj;
    // obj2 = {label: 'label', size: 20}; // 编译错误
}

interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig) {
    console.log(config.color, config.width);
}

export function excess() {
    let obj = {color2: "Red", width: 10};
    createSquare(obj);
    // createSquare({color2: "Red", width: 10}); // ts编译报错
}


// ----------------- Function Types ----------------------------
interface SearchFunc {
    (source: string, subString: string): boolean;
}

const mySearch: SearchFunc = (source: string, subString: string) => {
    return source.search(subString) === -1;
};

const mySearch2: SearchFunc = (src, sub) => {
    return src.search(sub) === -1;
};

// ----------------- Indexable Types ----------------------------
class Animal {
    name: string;
}

class Dog extends Animal {
    breed: string;
}

/*
 Error: `数字类型索引`的type必须是`字符类型索引`的subtype
 interface NotOkay {
     [x: number]: Animal;
     [y: string]: Dog;
 }
 */
interface Okay {
    [x: number]: Dog;
    [y: string]: Animal;
}

let dog1: Dog = {breed: 'dog1 breed', name: 'dog1'};
let animal1: Animal = {name: 'animal1'};
let okay: Okay = {0: dog1, "animal1": animal1};
console.log(okay[0], okay["animal1"]);

// ----------------- Class Types ----------------------------
/**
 * 定义类的类型
 *
 * `TS`只能定义`instance`级别的`member type`
 */
interface IClock {
    currentTime: Date;
    setTime(d: Date): void;
}

class Clock implements IClock {
    currentTime: Date;
    setTime(d: Date): void {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}
/**
 * 定义类的类型
 *
 * `TS`只能定义`instance`级别的`member type`
 * 如需定义`class`级别的`member type`则需要一种变通的方式
 * 以下范例就实现了`constructor`的类型定义实现方式(`constructor`函数属于`class`级别的)
 */
interface IClockConstructor {
    new (h: number, m: number): IClock;
}

// Error:(105, 7) TS2420: Class 'Clock2' incorrectly implements interface 'IClockConstructor'.
// Type 'Clock2' provides no match for the signature 'new (h: number, m: number): IClock'
// class Clock2 implements IClockConstructor {
//     constructor(h: number, m: number) {}
// }

function createClock(ctor: IClockConstructor, h: number, m: number): IClock {
    return new ctor(h, m);
}

class DigitalClock implements IClock {
    currentTime: Date;
    constructor(h: number, m: number) { }
    setTime(d: Date): void {
        this.currentTime = d;
    }
}

const digitalClock = createClock(DigitalClock, 12, 17);

// ----------------- Hybrid Types ----------------------------

interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

// 以下为理解代码
const counter: Counter = ((start: number): string => {
    return start.toString();
}) as Counter;
counter.interval = 8;
counter.reset = () => { };

// 常规代码应这样写
function getCounter(): Counter {
    let counter = ((start: number) => { }) as Counter;
    counter.reset = () => { };
    counter.interval = 123;
    return counter;
}

const c: Counter = getCounter();
c(10);
c.interval = 8;
c.reset();
