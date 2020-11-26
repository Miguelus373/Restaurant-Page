export default function menuLoad(content) {
  content.innerHTML = `
  <div class='menu-page'>
    <h1 class='menu-head'>Pick your favorite Cake!</h1>
    <div class="cakes-container">
      <div class="cake">
        <img src="../src/drip.png" class="cake-img"/>
        <h2>Drip Cake</h2>
        <p>$25</p>
      </div>
      <div class="cake">
        <img src="../src/red-velvet.png" class="cake-img"/>
        <h2>Red Velvet</h2>
        <p>$20</p>
      </div>
      <div class="cake">
        <img src="../src/cupcakes.png" class="cake-img"/>
        <h2>Cupcakes</h2>
        <p>$10</p>
      </div>
    </div>
  </div>
  `;
}