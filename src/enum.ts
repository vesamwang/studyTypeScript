/**
 * Created by 720718 on 2016/7/25.
 */


function enumA() {
    enum Color {Red, Green, Blue}

    console.log(Color[1]); // Green
    console.log(Color.Blue); // 2
}

enumA();

enum BusinessType {Product, Customer}

console.log(BusinessType.Product);
console.log(BusinessType['Customer']);
