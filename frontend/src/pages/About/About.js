import React from "react";
//import { Image, ScrollView, Text } from "react-native";

import "./About.css"
import Projectdemo from "./../../assets/images/projectdemo.png";
import Walmartlogo from "./../../assets/images/walmart.png";
import Bestbuylogo from "./../../assets/images/bestbuylogo.png";
import Jeanine from "./../../assets/images/jeanine.png";


const About = () => {
    return (
        <>
        <div className="mainpage">
            <div>
            <h1 id="aboutit"> About us </h1>
             <p className="text-para"> The main objective of application is to provide users a platform which collects the
        information about the product of user interest like price, reviews and if there are any offers
        available in those ecommerce sites. The application can save both time and money for the
        customers and can also help the ecommerce platforms to get customer attention if they can
        offer great deals. </p>
                <p className="text-para">In recent years, the usage of e-commerce platforms for purchasing the needs became a
daily routine of many people as it saves them lot of time and provides many options which
can be ordered from online. But the main problem that a lot of customers face is spending
much money for the product as they don’t get time to check different websites to compare
the deals. It would be a good idea to have an application which he</p>
        </div>
        <h3 className="heading">insert image</h3>
        <div className="hi">
        
         <img className="img-demo" src={Projectdemo} /> 
            <p className="img-para" > Usually following methods are followed to get the product data from ecommerce websites:
                        1.	Feed from Sellers
                        2.	Third party API’s
                        3.	Web Scrapping
                            We will use Web Scraping, which is a secure and efficient method of obtaining data from various ecommerce sites, as obtaining data from Sellers and third-party APIs is difficult and costly.

            </p>
        </div>
        
        <div>
            <h3 className="heading"> Brand Logos</h3>
            <div>
            <img className="logoimg" src={Walmartlogo}/>
            <img className="logoimg" src={Bestbuylogo}/>
            </div>
            
        </div>
        
        
        <h3 className="heading">Stories</h3>
        <div className="reviewsetup">
            <img className="userimg" src={Jeanine}/>
        <div>
            
            <p class="parafont">“Jeanine, working as a Team Manager in a MNC and a mother of two children who likes to visit different stores for shopping during her teenage. In recent years she is not able to find time in between her professional and family life to go for shopping. So she started purchasing the things online, but she is not able to spend much time to check different e-commerce platforms to compare the deals in each site due to her busy schedules”</p>
            <p class="parafont" id="theend">“Jeanine got an idea thinking about her problem and asked her team whether any websites are available to compare the products across different ecommerce websites, the team suggested her few options available. She has gone through those websites and liked the overall features available. However, she felt like there are few more features that can be added to the existing functionality”.</p>
        </div>
        </div>

        </div>
        
        </>
        /*</ScrollView>*/
    );
}

export default About;