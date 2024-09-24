import React from 'react'

export default function () {
  return (
   <>
   <section class="cart-section">
<h2>Cart</h2>
<div class="cart-item">
  <img src="https://via.placeholder.com/50" alt="White Casual Sneaker"/>
  <div class="item-details">
    <h3>White Casual Sneaker</h3>
    <p>$70</p>
  </div>
  <div class="item-quantity">
    <button class="decrease">-</button>
    <input type="number" value="1" min="1"/>
    <button class="increase">+</button>
  </div>
</div>
</section>
   </>
  )
}
