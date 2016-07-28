# Official

## Basic

### Tuple
> tuple采用数组定义类型，定义后的类型结果将影响数组内定义的元素类型，后续数组元素类型采用union type的已定义数组元素类型


- `lex x: [number, string];`
    - `x[0]`必须是`number`
    - `x[1]`必须是`string`
    - `x[2...n]`必须是`number | string`
- `lex y: [number, string, boolean];`
    - `y[0]`必须是`number`
    - `y[1]`必须是`string`
    - `y[2]`必须是`boolean`
    - `y[3...n]`必须是`number | string | boolean`

### Any
> 定义为`any`类型的变量，ts在编译时不再进行任何检查，即使其没有某些功能

```
export default function () {
    let x: any = 10;
    // console.log(x.noExists()); // tsc能够通过 但执行js时会报错
    console.log(x.toFixed(2));

    x = 'hello world';
    console.log(x.length);
}
```

## Interface
> 困惑：为何用变量代替`object literal`就可以绕过TypeScript的类型检查？

```
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

```

> 以下这个列子有点感觉知道为何了

```
    let obj2: LabelValue;
    obj2 = obj; // 对象变量赋值给约定类型，则多余的properties将会忽略
    // obj2 = {label: 'foo', size: 20}; // 编译报错

```