import './style.css';
import Jellyfish from './valdemaras-d-kixZ0TUROkc-unsplash.jpg';

const contElem = document.querySelector('.content');

function component()
{
    const element = document.createElement('p');

    element.textContent = "Webpack is working";

    const myJelly = new Image();
    myJelly.src = Jellyfish;

    element.appendChild(myJelly);

    return element;
}

contElem.appendChild(component());