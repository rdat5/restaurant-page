import './style.css';

const contElem = document.querySelector('.content');

function component()
{
    const element = document.createElement('p');

    element.textContent = "Webpack is working";

    return element;
}

contElem.appendChild(component());