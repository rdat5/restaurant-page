import BurgerPath from './amirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg';
import HotDogPath from './pexels-polina-tankilevitch-4518656.jpg';
import PizzaPath from './pexels-sydney-troxell-708587.jpg';
import PancakePath from './pexels-pixabay-357573.jpg';
import ShakePath from './clarissa-carbungco-uy9DJw9e_vs-unsplash.jpg';

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

    const menuItems = [];
    menuItems.push(new Food("Something Burger", "$11.99", BurgerPath, "Our famous Something Burger."));
    menuItems.push(new Food("Something Burger Jr.", "$8.99", BurgerPath, "A smaller Something Burger"));
    menuItems.push(new Food("The Triple Dog", "$9.99", HotDogPath, "Three hotdogs. That's it."));
    menuItems.push(new Food("The Slice", "$3.50", PizzaPath, "A simple slice of pizza."));
    menuItems.push(new Food("Panks", "4.99", PancakePath, "A tower of pancakes."));
    menuItems.push(new Food("Milkshake", "6.99", ShakePath, "A frosty chocolate milkshake."));

    // Show all menu items
    for (let i = 0; i < menuItems.length; i++)
    {
        menuElem.appendChild(newCardElement(menuItems[i]));
    }

    // Add menu to main element
    main.appendChild(menuElem);
}

export {menuSetup};