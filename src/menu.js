import FoodPath1 from './amirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg';

class Food {
    constructor(name, price, imagepath, desc) {
        this.name = name;
        this.price = price;
        this.imagepath = imagepath;
        this.desc = desc;
    }
}

function newCardElement(food)
{
    const card = document.createElement('div');
    card.classList.add('card');
    
    const foodName = document.createElement('h3');
    foodName.textContent = food.name;
    card.appendChild(foodName);
    
    const foodImage = new Image();
    foodImage.src = food.imagepath;
    foodImage.height = 128;
    card.appendChild(foodImage);

    const foodDesc = document.createElement('p');
    foodDesc.textContent = food.desc;
    card.appendChild(foodDesc);
    
    const foodPrice = document.createElement('h4');
    foodPrice.textContent = food.price;
    card.appendChild(foodPrice);

    return card;

}

function menuSetup(main)
{
    const menuElem = document.createElement('div');
    menuElem.classList.add('menu-element');

    for (let i = 0; i < 6; i++)
    {
        const TestFood = new Food("Food" + (i + 1), "12.99", FoodPath1, "Something");
        menuElem.appendChild(newCardElement(TestFood));
    }

    // Add menu to main element
    main.appendChild(menuElem);
}

export {menuSetup};