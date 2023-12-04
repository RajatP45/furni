import React from 'react'
import { Link } from 'react-router-dom'
function header() {
    const imagePath = '../assets/images/user.svg';
    const imagePath1 = '../assets/images/cart.svg';
  return (
    <>
      	<nav class="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">

                <div class="container">
                <a class="navbar-brand" href="index.html">Furni<span>.</span></a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

    <div class="collapse navbar-collapse" id="navbarsFurni">
        <ul class="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
            <li class="nav-item">
            <Link to="/" className='nav-link' >Home</Link>
            </li>
            <li><Link to="/about" class="nav-link">About us</Link></li>
            <li><Link to="/shop" class="nav-link">Shop</Link></li>
            <li><Link to="/blog" class="nav-link">Blog</Link></li>
            <li><Link to="/services" class="nav-link">Services</Link></li>
            <li><Link to="/contact" class="nav-link">Contact us</Link></li>
        </ul>

        <ul class="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
            <li><Link to="/login" class="nav-link"><img src={imagePath} /></Link></li>
            <li><Link to="/cart" class="nav-link"><img src={imagePath1} /></Link></li>
        </ul>
    </div>
</div>
    
</nav>
    </>
  )
}

export default header
