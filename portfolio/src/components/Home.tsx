import React from "react";
import PortfolioImage from './images/PortfolioImage.jpeg'
import Carousel from "./Carousel";



const Home: React.FC = () => {

    
    const containerGrid: string = "grid grid-cols-2 gap-4 my-5 "
    const brandStatement: string = "bg-slate-200"
    const imageSize: string = "w-80 rounded"

    return(
        <div>
            <Carousel />
        <div className={containerGrid}>
            
        <div className={brandStatement}>test</div>
        <img className={imageSize} src={PortfolioImage} alt="Jesus" />
        </div>
        </div>
    )
}
export default Home;