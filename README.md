# Official Basic

## Tuple
> 理解：tuple采用数组定义类型，定义后的类型结果将影响数组内定义的元素类型，后续数组元素类型采用union type的已定义数组元素类型


- `lex x: [number, string];`
    - `x[0]`必须是`number`
    - `x[1]`必须是`string`
    - `x[2...n]`必须是`number | string`
- `lex y: [number, string, boolean];`
    - `y[0]`必须是`number`
    - `y[1]`必须是`string`
    - `y[2]`必须是`boolean`
    - `y[3...n]`必须是`number | string | boolean`