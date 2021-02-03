const Home = () => {
  const content = document.querySelector('#content');
  const home = document.createElement('div');
  const navBar = document.createElement('div');
  const background = document.createElement('img');
  const restaurantDetails = document.createElement('div');

  // nav bar
  navBar.innerHTML = `<div class="tabs">
 
  <ul>
    
    <h1> <span>&#127811;</span>S E L E R I <span>&#127811;</span></h1>
    <li class="trigger active" data-target="#home">Home</li>
    <li class="trigger" data-target="#menu">Menu</li>
    <li class="trigger" data-target="#contact">Contact Us</li>
  </ul>

</div>`;

  // full details
  restaurantDetails.innerHTML = `<div class = "restaurant-details active">
  <img src="./assets/home-salad.png" class = "home-picture">
  <div class = "information">
  <h2> Real food, not rabbit food </h2>
  <p>142-48 Pinatubo Street Barangka Ilaya 1550 </br> Mandaluyong City </br> Contact: 09661425421</p>
  <button>Order Now </button>
  </div>
  </div>`;
  home.appendChild(navBar);
  content.appendChild(home);
  content.appendChild(background);
  content.appendChild(restaurantDetails);
};

export default Home;
