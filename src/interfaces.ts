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


// ----------------- Function ----------------------------
interface SearchFunc {
    (source: string, subString: string): boolean;
}

const mySearch: SearchFunc = (source: string, subString: string) => {
    return source.search(subString) === -1;
};

const mySearch2: SearchFunc = (src, sub) => {
    return src.search(sub) === -1;
};

// ----------------- Indexable Type ----------------------------
