/**
 * Created by 720718 on 2016/7/25.
 */

export default function any() {
    let x: any = 10;
    // console.log(x.noExists()); // tsc能够通过 但执行js时会报错
    console.log(x.toFixed(2));

    x = 'hello world';
    console.log(x);
}

