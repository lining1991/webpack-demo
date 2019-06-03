import _ from 'lodash';
// import printMe from './print.js';
function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    element.innerHTML = _.join(['hello', 'webpack'], ' ');

    // btn.innerHTML = printMe;
    // btn.onclick = printMe;
    // dd
    element.appendChild(btn);
    return element;
}

document.body.appendChild(component());

