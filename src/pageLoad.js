import './style.css';
import JellyPath from './valdemaras-d-kixZ0TUROkc-unsplash.jpg';

const contentWrapper = document.querySelector(".content");

// function newComponent(elemType, nameOfClass, text)
// {
//     const element = document.createElement(elemType);

//     if (nameOfClass)
//     {
//         element.classList.add(nameOfClass);
//     }

//     if (text)
//     {
//         element.textContent = text;
//     }

//     return element;
// }

function onNavBarClick(buttonClicked)
{
    switch (buttonClicked)
    {
        case "home":
            console.log("You clicked home!");
            break;
        case "menu":
            console.log("You clicked Menu!");
            break;
        case "contact":
            console.log("You wanted to contact us!");
            break;
    }
}

function initialPageSetup()
{
    // Header
    // const headerElem = newComponent('div', 'page-header', null);
    const headerElem = document.createElement('div');
    headerElem.classList.add('page-header');
    // headerElem.appendChild(newComponent('h1', null, "Something Restaurant"));
    const headerText = document.createElement('h1');
    headerText.textContent = "Something Restaurant";
    headerElem.appendChild(headerText);
    contentWrapper.appendChild(headerElem);

    // Navbar
    // const navElem = newComponent('div', 'page-nav', null);
    const navElem = document.createElement('div');
    navElem.classList.add('page-nav');

    const homeTab = document.createElement('button');
    homeTab.id = "home-tab";
    homeTab.textContent = "Home";
    homeTab.addEventListener("click", () => {onNavBarClick("home")});

    navElem.appendChild(homeTab);

    const menuTab = document.createElement('button');
    menuTab.id = "menu-tab";
    menuTab.textContent = "Menu";
    menuTab.addEventListener("click", () => {onNavBarClick("menu")});

    navElem.appendChild(menuTab);

    const contactTab = document.createElement('button');
    contactTab.id = "contact-tab";
    contactTab.textContent = "Contact Us";
    contactTab.addEventListener("click", () => {onNavBarClick("contact")});

    navElem.appendChild(contactTab);

    contentWrapper.appendChild(navElem);

    // Home page
    // Main
    // const MainElem = newComponent('div', 'main', null);
    const MainElem = document.createElement('div');
    MainElem.classList.add('main');
    // MainElem.appendChild(newComponent('h2', null, 'Welcome to Something Restaurant!'));
    const welcomeText = document.createElement('h2');
    welcomeText.textContent = "Welcome to Something Restaurant!";
    MainElem.appendChild(welcomeText);

    const JellyImg = new Image();
    JellyImg.src = JellyPath;
    JellyImg.height = 128;
    MainElem.appendChild(JellyImg);

    const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut eros blandit, condimentum erat id, aliquam turpis. Duis luctus, enim in viverra maximus, massa nisl aliquam lorem, at tristique erat dui quis turpis. Cras placerat tincidunt dolor sed pellentesque. Vivamus congue, magna ut hendrerit porta, leo nulla dapibus ante, sit amet feugiat nisi odio eget mauris. Sed lectus eros, sagittis non enim sit amet, porta pharetra elit. Morbi lorem dolor, vulputate sed libero in, fringilla ultricies libero. Sed neque nisi, pellentesque sit amet pretium vel, suscipit sed sem. Vivamus mauris urna, volutpat vel arcu ut, lacinia elementum est. Proin pretium convallis eros. Nunc eu iaculis ante. Praesent tempor nibh et massa tincidunt scelerisque. Duis dignissim enim lobortis nisi eleifend sodales sit amet suscipit ipsum."
    // MainElem.appendChild(newComponent('p', null, loremIpsum));
    const restaurantDesc = document.createElement('p');
    restaurantDesc.textContent = loremIpsum;
    MainElem.appendChild(restaurantDesc);
    contentWrapper.appendChild(MainElem);

    // Footer
    // const FooterElem = newComponent('div', 'page-footer', 'Ray Allen Datuin 2022');
    const FooterElem = document.createElement('div');
    FooterElem.classList.add('page-footer');
    FooterElem.textContent = 'Ray Allen Datuin 2022';
    contentWrapper.appendChild(FooterElem);
}

export {initialPageSetup};