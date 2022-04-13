import './style.css';
import JellyPath from './valdemaras-d-kixZ0TUROkc-unsplash.jpg';

const contentWrapper = document.querySelector(".content");

function newComponent(elemType, nameOfClass, text)
{
    const element = document.createElement(elemType);

    if (nameOfClass)
    {
        element.classList.add(nameOfClass);
    }

    if (text)
    {
        element.textContent = text;
    }

    return element;
}

function initialPageSetup()
{
    // Header
    const headerElem = newComponent('div', 'page-header', null);
    headerElem.appendChild(newComponent('h1', null, "Something Restaurant"));
    contentWrapper.appendChild(headerElem);

    // Main
    const MainElem = newComponent('div', 'main', null);
    MainElem.appendChild(newComponent('h2', null, 'Welcome to Something Restaurant!'));

    const JellyImg = new Image();
    JellyImg.src = JellyPath;
    JellyImg.height = 128;
    MainElem.appendChild(JellyImg);

    const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut eros blandit, condimentum erat id, aliquam turpis. Duis luctus, enim in viverra maximus, massa nisl aliquam lorem, at tristique erat dui quis turpis. Cras placerat tincidunt dolor sed pellentesque. Vivamus congue, magna ut hendrerit porta, leo nulla dapibus ante, sit amet feugiat nisi odio eget mauris. Sed lectus eros, sagittis non enim sit amet, porta pharetra elit. Morbi lorem dolor, vulputate sed libero in, fringilla ultricies libero. Sed neque nisi, pellentesque sit amet pretium vel, suscipit sed sem. Vivamus mauris urna, volutpat vel arcu ut, lacinia elementum est. Proin pretium convallis eros. Nunc eu iaculis ante. Praesent tempor nibh et massa tincidunt scelerisque. Duis dignissim enim lobortis nisi eleifend sodales sit amet suscipit ipsum."
    MainElem.appendChild(newComponent('p', null, loremIpsum));
    contentWrapper.appendChild(MainElem);

    // Footer
    const FooterElem = newComponent('div', 'page-footer', 'Ray Allen Datuin 2022');
    contentWrapper.appendChild(FooterElem);
}

export {initialPageSetup};