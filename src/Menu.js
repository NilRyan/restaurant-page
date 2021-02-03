const Menu = () => {
  const content = document.querySelector('#content');
  const menu = document.createElement('div');
  menu.classList.add('menu');
  menu.innerHTML = `
  <div> <img src="./assets/food-item-1.jpg" ></div>

  <div class = "food-description"> 
    <h2> Summer Asian Slaw </h2>
    <p> A tahini miso dressing gives it a creamy umami coating, while peaches add juicy pops of sweetness. I finish it with toasted pepitas for crunch. </p>
    <h2> Price: ₱250 </h2> 
  </div>

  <div class = "food-description"> 
    <h2> Chef's Salad </h2>
    <p> Lettuce cut into bite-sized pieces and seasoned with salt and pepper. Enriched with special dressing and topped with the cheese, meats, eggs, and avocado, like the spokes of a wheel, on top of each salad.  </p>
    <h2> Price: ₱200 </h2>
  </div>

  <div><img src="./assets/food-item-3.jpg" > </div>
  <div> <img src="./assets/food-item-4.jpg" > </div>

  <div class = "food-description"> 
    <h2> Babi Salad </h2>
    <p> Lettuce, tomato, leaves topped with bits of chicken and beans </p>
    <h2>Price: ₱366</h2>
  </div>
  
  `;
  content.appendChild(menu);
};

export default Menu;
