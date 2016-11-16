/**
 * Created by levin on 11/16/16.
 */

import {DateType, DateTypes} from './types';

console.log(DateTypes[DateType.Day].key, DateTypes[DateType.Day].value);
console.log(DateTypes[DateType.Week].key, DateTypes[DateType.Week].value);
console.log(DateTypes[DateType.Month].key, DateTypes[DateType.Month].value);

for (let item of DateTypes) {
  console.log(item);
}

for (let idx in DateTypes) {
  console.log(idx);
}
