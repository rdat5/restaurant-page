function newTextElem(text)
{
    const element = document.createElement('p');
    element.textContent = text;

    return element;
}

function contactSetup(main)
{
    const contactHeader = document.createElement('h3');
    contactHeader.textContent = "Please contact us at:";

    main.appendChild(contactHeader);
    main.appendChild(newTextElem("(123)555-1234"));
    main.appendChild(newTextElem("MrManager@SomethingRestaurant.com"));
}

export {contactSetup};