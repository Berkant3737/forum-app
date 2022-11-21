import React from 'react'
import NavbarJson from '../../json/Navbar.json'

function Navbar() {
  return (
    <div>
      <nav class="navbar sticky-top navbar-expand-lg">
  <div class="container">
    <a class="navbar-brand" href="#">Forum App</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        {NavbarJson.map((navbar) => {
              return(
                <li class="nav-item p-2">
                <a class="nav-link text-white" aria-current="page" href="#">
                  {navbar.content}
                </a></li>
              )
            })}
      </ul>
    </div>
  </div>
</nav>  
    </div>
  )
}

export default Navbar