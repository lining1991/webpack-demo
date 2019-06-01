import _ from 'lodash';
import printMe form './print.js';
function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    element.innerHTML = _.join(['hello', 'webpack'], ' ');

    btn.innerHTML = 'click me';
    btn.onclik = printMe;
    element.appendChild(btn);
    return element;
}

document.body.appendChild(component());
