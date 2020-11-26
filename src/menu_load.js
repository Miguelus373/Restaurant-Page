export default function menuLoad(content, cakes) {
  content.innerHTML = `
  <div class='menu-page'>
    <h1 class='menu-head'>Pick your favorite Cake!</h1>
    <div class="cakes-container">
    </div>
  </div>
  `;

  const container = document.querySelector('div.cakes-container');

  cakes.forEach(item => {
    const cake = document.createElement('div');
    cake.setAttribute('class', 'cake');

    cake.innerHTML = `
    <img src="${item.img}"/>
    <h2>${item.name}</h2>
    <p>$${item.price}</p>
    `;

    container.appendChild(cake);
  });
}