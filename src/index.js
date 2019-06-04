import _ from 'lodash';
import printMe from './print.js';



function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    element.innerHTML = _.join(['嘿嘿','hello', 'webpack', 'are you ok', 'i am ok 是而ve哈哈ryOK', 'are you ok i am ok'], ' ');

    btn.innerHTML = 'clickMe';
    btn.onclick = printMe;
    // dd
    console.log('are you watching me : npm run watch for a test');
    element.appendChild(btn);
    return element;
}

document.body.appendChild(component());

if (module.hot) {
    console.log(`hhhh`);
    module.hot.accept('./print.js', function() {
        console.log('Accepting the updated printMe module!');
        printMe();
    })
} else {
    console.log('我不是hot');
}

