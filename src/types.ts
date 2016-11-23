/**
 * Created by levin on 11/16/16.
 */

export enum DateType {Day, Week, Month}

/*
DateType {
0: 'Day',
1: 'Week',
2: 'Month',
Day: 0,
Week: 1,
Month: 2
}
 */

export interface UnitType {
    key: string;
    value: string;
}

export let DateTypes: UnitType[] = [];
DateTypes[DateType.Day] = {key: 'D', value: 'day'};
DateTypes[DateType.Week] = {key: 'W', value: 'week'};
DateTypes[DateType.Month] = {key: 'M', value: 'month'};

console.log(DateType.Day);
console.log(DateType[DateType.Day]);
console.log(DateType["Day"]);
const w: any = "Week";
console.log(DateType[w]);
console.log(DateType[w] === DateType.Week as any);

function enumToArray(obj: any): Array<any> {
    return Object.keys(obj)
        .map(k => obj[k])
        .filter(v => typeof v === 'string');
}

for (const item of enumToArray(DateType)) {
    console.log(`DateType key is ${DateType[item]} | value is ${item}`);
    // console.log(DateType[item] === DateType.Day as any);
}
