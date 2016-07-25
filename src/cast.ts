/**
 * Created by 720718 on 2016/7/25.
 */

export default function () {
    let x: any = 'hello world';
    let y: number = (<string>x).length;
    let z: number = (x as string).length;
}