import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
    <nav class="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: '#2E2E2E'}}>
  <div class="container">
    <a class="navbar-brand" href="#">Portfolio</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/Home"><a class="nav-link active" aria-current="page" href="#">Home</a></Link>
        </li>
        <li class="nav-item">
          <Link to="/About"><a class="nav-link" href="#">About</a></Link>
        </li>
        <li class="nav-item">
          <Link to="/Services"><a class="nav-link" href="#">Skills</a></Link>
        </li>
        <li class="nav-item">
          <Link to="/Contact"><a class="nav-link" href="#">Contact US</a></Link>
        </li>
      </ul>

      {/* <form class="d-flex">
        <button class="btn btn-outline-success" type="submit">Login</button>
        <button class="btn btn-outline-primary" type="submit">Register</button>  
      </form> */}
    </div>
  </div>
</nav>
    );
}
 export default Navbar;