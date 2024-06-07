import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-tertiary border-bottom">
            <div class="container-md">
                <a class="navbar-brand fst-italic" href="#">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFKg-GUVMFFsA8A_HFmZdvl8O3gzublaZWlrRJN8jSgek2p4uVn7RcRvsj_2bkZmvHXJY&usqp=CAU" alt="Logo" width="50" height="40" class="d-inline-block align-text-right"/>
                    Sunshine Public Library
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse  justify-content-end" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/services">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/contact">Contact</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/faq">FAQ</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
