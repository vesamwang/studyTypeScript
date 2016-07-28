/**
 * Created by 720718 on 2016/7/25.
 */

export default function variable() {
    const obj = {a: "foo", b: "bar", c: "foo_c", d: "bar_d"};
    let {a, b} = obj;
    console.log(a, b);
    let {c, d}: {c: string, d: string} = obj;
    console.log(c, d);
}