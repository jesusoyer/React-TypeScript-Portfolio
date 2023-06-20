import React from "react";

import placeHolderImage from "./images/placeHolderPicure-159778.jpeg"

const heroCss = {
    outerDiv: " w-screen text-white",
    heroContainer: "container mx-auto flex px-5 py-9 items-center justify-center flex-col",
    heroImage:"lg:w-2/6 md:w-3/6 w-4/6 mb-1 object-cover object-center rounded",
    carouselContentContainer: "flex space-x-20 mt-2",
    background:"linear-gradient(90deg, rgba(60, 60, 60, 1) 24%, rgba(90, 90, 90, 1) 58%, rgba(240, 240, 240, 1) 100%)"

}

const Hero: React.FC = () => {



    const { outerDiv, heroContainer, heroImage, carouselContentContainer,background } = heroCss;
    return(
        <div className={outerDiv} style={{ background }}>
                <div></div>
        <div className={heroContainer}>
            <h1>Project name</h1>
           <img className={heroImage} src={placeHolderImage} alt="testImage"></img>
           <div className={carouselContentContainer}>
           <p>Content Name</p>
           <p>Description</p>
           </div>

           </div>
        </div>
            )
}
export default Hero;