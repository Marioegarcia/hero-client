import React from 'react'
import {
    Link
  } from "react-router-dom";

export default function MenuTop() {
    return (
        <nav className=" navbar navbar-expand-lg navbar-dark bg-dark ">
      
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
       
       
        <div className="collapse nav justify-content-center navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav ">
            <li className="nav-item active">
              
                <Link className="nav-link" to='/'>
                    MARVEL HEROES
                </Link>
              
            </li>
          
            
          </ul>
          
        </div>
      </nav>
   
    );
}
