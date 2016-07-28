/**
 * Created by 720718 on 2016/7/25.
 */

import any from './any';
import interfaces, {excess} from './interfaces';
import variable from './var';

function enhanceFun(fun: any, ...others: any[]) {
    return others.reduce((init, value) => value(init), fun);
}

function logger(fun: any) {
    console.log('\n=== function name: ',fun.name, '===');
    return fun;
}


enhanceFun(any, logger)();
enhanceFun(interfaces, logger)();
enhanceFun(excess, logger)();
enhanceFun(variable, logger)();
