import React from "react";
import testImage from "../images/PortfolioImage.jpeg"
import secondTestImage from "../images/laptop.jpg"
import contactPageCss from "./contactCss"




const ProfileComponent: React.FC = () => {

    const { profileCard, skillBlocks, blockOutline, imageSize, imageContainer, topProfileContainer, topImageContainer, topImage, introContainer, nameContainer, jobTitleContainer } = contactPageCss;
  

    return(
        <div >
                <div className={profileCard}>
                    <div className={topImageContainer}>
                    <div className={topProfileContainer}>

                    <div className={topImageContainer}> <img className={topImage} src={secondTestImage} alt="Jesus" /></div>

                    </div>
                    </div>
                    <div className={imageContainer}> <img className={imageSize} src={testImage} alt="Jesus" /></div>
                    <div className={introContainer}>
                        <div className={nameContainer}>
                            Jesus

                        </div>

                    <div className={jobTitleContainer}>Front-end developer</div>
                    </div>
                    <div className={skillBlocks}>
                    <div className={blockOutline}>JavaScript</div>
                    <div className={blockOutline}>React.js</div>
                    <div className={blockOutline}>Express.js</div>
                    <div className={blockOutline}>Node.js</div>
                    <div className={blockOutline}>React- TypeScript</div>
                    <div className={blockOutline}>TypeScript</div>
                    <div className={blockOutline}>GraphQL</div>
                    <div className={blockOutline}>MongoDB</div>
                    <div className={blockOutline}>SQL</div>
                    <div className={blockOutline}>Axios</div>
                    <div className={blockOutline}>Redux</div>
                    <div className={blockOutline}>ReduxToolkit</div>
                    <div className={blockOutline}>React Bootstrap</div>
                    <div className={blockOutline}>Tailwind CSS</div>
                    <div className={blockOutline}>HTML</div>
                    <div className={blockOutline}>CSS</div>
                    <div className={blockOutline}>GitHub</div>
                    </div>
                    
                    </div>

            </div>
       
    )
}
export default ProfileComponent;