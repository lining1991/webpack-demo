import './style.css';
import _ from 'lodash';
import Icon from './photo.jpg';

function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['hello', 'webpack'], ' ');

    const myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);


    element.classList.add('hello');
    return element;
}

document.body.appendChild(component());
