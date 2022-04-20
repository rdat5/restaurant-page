import './style.css';
import { homeSetup } from './home';
import { menuSetup } from './menu';
import { contactSetup } from './contact';

const contentWrapper = document.querySelector(".content");
const MainElem = document.createElement('div');
const homeTab = document.createElement('button');
const menuTab = document.createElement('button');
const contactTab = document.createElement('button');

function onNavBarClick(buttonClicked)
{
    clearSection(MainElem);
    switch (buttonClicked)
    {
        case "home":
            console.log("You clicked home!");
            homeSetup(MainElem);
            homeTab.style.backgroundColor = "#7794DC";
            menuTab.style.backgroundColor = "#376EC0";
            contactTab.style.backgroundColor = "#376EC0";
            break;
        case "menu":
            console.log("You clicked Menu!");
            menuSetup(MainElem);
            homeTab.style.backgroundColor = "#376EC0";
            menuTab.style.backgroundColor = "#7794DC";
            contactTab.style.backgroundColor = "#376EC0";
            break;
        case "contact":
            console.log("You wanted to contact us!");
            contactSetup(MainElem);
            homeTab.style.backgroundColor = "#376EC0";
            menuTab.style.backgroundColor = "#376EC0";
            contactTab.style.backgroundColor = "#7794DC";
            break;
    }
}

function clearSection(elemToClear)
{
    while(elemToClear.firstChild)
    {
        elemToClear.removeChild(elemToClear.firstChild);
    }
}

function initialPageSetup()
{
    // Header
    const headerElem = document.createElement('div');
    headerElem.classList.add('page-header');
    const headerText = document.createElement('h1');
    headerText.textContent = "Something Restaurant";
    headerElem.appendChild(headerText);
    contentWrapper.appendChild(headerElem);

    // Navbar
    const navElem = document.createElement('div');
    navElem.classList.add('page-nav');

    // const homeTab = document.createElement('button');
    homeTab.id = "home-tab";
    homeTab.textContent = "Home";
    homeTab.addEventListener("click", () => {onNavBarClick("home")});

    navElem.appendChild(homeTab);

    // const menuTab = document.createElement('button');
    menuTab.id = "menu-tab";
    menuTab.textContent = "Menu";
    menuTab.addEventListener("click", () => {onNavBarClick("menu")});

    navElem.appendChild(menuTab);

    // const contactTab = document.createElement('button');
    contactTab.id = "contact-tab";
    contactTab.textContent = "Contact Us";
    contactTab.addEventListener("click", () => {onNavBarClick("contact")});

    navElem.appendChild(contactTab);

    contentWrapper.appendChild(navElem);

    // Home page
    // Main
    MainElem.classList.add('main');
    contentWrapper.appendChild(MainElem);

    // Footer
    const FooterElem = document.createElement('div');
    FooterElem.classList.add('page-footer');
    FooterElem.textContent = 'Ray Allen Datuin 2022';
    contentWrapper.appendChild(FooterElem);

    // Start at home page
    clearSection(MainElem);
    homeSetup(MainElem);
    menuTab.style.backgroundColor = "#376EC0";
    contactTab.style.backgroundColor = "#376EC0";
}

export {initialPageSetup};