import React from 'react'
import '../App.css'
export default function Navebar() {
  return (
   <>
    <nav>
    <div class="logo">MyLogo</div>
    <ul class="nav-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
    <div class="burger">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
    </div>
  </nav>
   </>
  )
}
