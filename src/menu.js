import FoodPath1 from './amirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg';

class Food {
    constructor(name, price, imagepath, desc) {
        this.name = name;
        this.price = price;
        this.imagepath = imagepath;
        this.desc = desc;
    }
}

function newCardElement(name, price, imagepath, desc)
{
    const card = document.createElement('div');
    card.classList.add('card');
    
    const foodName = document.createElement('h3');
    foodName.textContent = name;
    card.appendChild(foodName);
    
    // const foodImage = document.createElement("p");
    // foodImage.textContent = "[FOOD]";
    const foodImage = new Image();
    foodImage.src = imagepath;
    foodImage.height = 128;
    card.appendChild(foodImage);

    const foodDesc = document.createElement('p');
    foodDesc.textContent = desc;
    card.appendChild(foodDesc);
    
    const foodPrice = document.createElement('h4');
    foodPrice.textContent = price;
    card.appendChild(foodPrice);

    return card;

}

function menuSetup(main)
{
    const menuElem = document.createElement('div');
    menuElem.classList.add('menu-element');

    for (let i = 0; i < 6; i++)
    {
        menuElem.appendChild(newCardElement("Food " + (i + 1), "15.99", FoodPath1, "Something"));
    }

    // Add menu to main element
    main.appendChild(menuElem);
}

export {menuSetup};