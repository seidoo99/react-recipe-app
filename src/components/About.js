import React from 'react';
import {
    Link, Route
} from "react-router-dom";
import './About.css'
const About = () => {
  return (
   <div>
   <Route>
   <nav className="navbar">
   <Link to="/">Home</Link>
   <Link to="Recipes">Recipes</Link>
   <Link to="NewRecipes">AddRecipe</Link>
   <Link to="favourite">Favourite</Link>
   <Link to="AllRecipe" >Custom Recipes</Link>
   <Link to="About">About</Link>
   </nav>
   </Route>
            <div className="about-section paddingTB60 gray-bg">
            <div className="container">
                <div className="row">
                    <div className="col-md-7 col-sm-6">
                        <div className="about-title clearfix">
                        <h1>About <span></span></h1>
                        <h3>Recipe App</h3>
                        <p className="about-paddingB"><b>This app is created for everyone that wants to try out new recipes.
                        You may have quickly seen something on TV or maybe you want to try making your favorite
                        dish from a restaurant.Get the recipe from any where for later trial</b> </p>
                        <div class="about-icons">
                        <ul >
                                <li><a href="https://www.linkedin.com/in/seid-zerihun"><i id="social-ln" class="fa fa-linkedin-square fa-3x social"></i></a> </li>
                                <li> <a href="https://github.com/seidoo99"><i id="social-git" class="fa fa-github-square fa-3x social"></i></a> </li>
                                <li> <a href="https://mail.google.com/mail/u/0/#inbox"><i id="social-em" class="fa fa-envelope-square fa-3x social"></i></a> </li>
                            </ul>   
                        </div>
                        </div>
                    </div>
                    <div class="col-md-5 col-sm-6">
                        <div class="about-img">
                        <img src="https://devitems.com/preview/appmom/img/mobile/2.png" alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
            </div>
   
   </div>
  )
}

export default About;