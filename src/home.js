import JellyPath from './valdemaras-d-kixZ0TUROkc-unsplash.jpg';

function homeSetup(main)
{
    const welcomeText = document.createElement('h2');
    welcomeText.textContent = "Welcome to Something Restaurant!";
    main.appendChild(welcomeText);

    const JellyImg = new Image();
    JellyImg.src = JellyPath;
    JellyImg.height = 128;
    main.appendChild(JellyImg);

    const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut eros blandit, condimentum erat id, aliquam turpis. Duis luctus, enim in viverra maximus, massa nisl aliquam lorem, at tristique erat dui quis turpis. Cras placerat tincidunt dolor sed pellentesque. Vivamus congue, magna ut hendrerit porta, leo nulla dapibus ante, sit amet feugiat nisi odio eget mauris. Sed lectus eros, sagittis non enim sit amet, porta pharetra elit. Morbi lorem dolor, vulputate sed libero in, fringilla ultricies libero. Sed neque nisi, pellentesque sit amet pretium vel, suscipit sed sem. Vivamus mauris urna, volutpat vel arcu ut, lacinia elementum est. Proin pretium convallis eros. Nunc eu iaculis ante. Praesent tempor nibh et massa tincidunt scelerisque. Duis dignissim enim lobortis nisi eleifend sodales sit amet suscipit ipsum."
    const restaurantDesc = document.createElement('p');
    restaurantDesc.textContent = loremIpsum;
    main.appendChild(restaurantDesc);
}

export {homeSetup};