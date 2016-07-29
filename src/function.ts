/**
 * Created by 720718 on 2016/7/29.
 */

/**
 * 函数`overload`
 * @param x
 */

function picked(x: string): string;
function picked(x: number): number;
function picked(x: any): any {
    if (typeof x === 'string') console.log(x);
    if (typeof x === 'number') console.log(x + 10);
}

picked(10);
picked('10');
// Error:(19, 8) TS2345: Argument of type '{}' is not assignable to parameter of type 'number'.
// picked({});