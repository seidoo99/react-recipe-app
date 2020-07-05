import React from 'react';
import './About.css'
const About = () => {
  return (
   <div>
            <div class="about-section paddingTB60 gray-bg">
            <div class="container">
                <div class="row">
                    <div class="col-md-7 col-sm-6">
                        <div class="about-title clearfix">
                        <h1>About <span></span></h1>
                        <h3>Recipe App</h3>
                        <p class="about-paddingB"><b>This app is created for everyone that wants to try out new recipes.
                        You may have quickly seen something on TV or maybe you want to try making your favorite
                        dish from a restaurant.Get the recipe from any where for later trial</b> </p>
                        <div class="about-icons">
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