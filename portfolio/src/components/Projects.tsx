import React from "react";
import ProjectsHero from "./ProjectsHero";
import laptopImage from "./images/laptop.jpg"

const projectsCss= {
    imageSize: "w-80 rounded",
    projectsGrid: "grid grid-cols-3 gap-5 mx-8 my-8",
    projectBoxes: "bg-slate-50 rounded"
}


const Projects: React.FC = () => {
    const { imageSize, projectsGrid, projectBoxes } = projectsCss;

    return(
        <div>
            
            <ProjectsHero />
            <div className={projectsGrid} >
                <div className={projectBoxes}>
                <img className={imageSize} src={laptopImage} alt="Jesus" />
                <h2>test</h2>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid officia est quia ratione. Cumque possimus porro tempore excepturi fugiat impedit, fuga debitis quod voluptates reiciendis quasi aperiam voluptatibus perferendis tempora.</p>
                </div>
                <div className={projectBoxes}>
                <img className={imageSize} src={laptopImage} alt="Jesus" />
                <h2>test</h2>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid officia est quia ratione. Cumque possimus porro tempore excepturi fugiat impedit, fuga debitis quod voluptates reiciendis quasi aperiam voluptatibus perferendis tempora.</p>
                </div>
                <div className={projectBoxes}>
                <img className={imageSize} src={laptopImage} alt="Jesus" />
                <h2>test</h2>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid officia est quia ratione. Cumque possimus porro tempore excepturi fugiat impedit, fuga debitis quod voluptates reiciendis quasi aperiam voluptatibus perferendis tempora.</p>
                </div>
                <div className={projectBoxes}>
                <img className={imageSize} src={laptopImage} alt="Jesus" />
                <h2>test</h2>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid officia est quia ratione. Cumque possimus porro tempore excepturi fugiat impedit, fuga debitis quod voluptates reiciendis quasi aperiam voluptatibus perferendis tempora.</p>
                </div>
                <div className={projectBoxes}>
                <img className={imageSize} src={laptopImage} alt="Jesus" />
                <h2>test</h2>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid officia est quia ratione. Cumque possimus porro tempore excepturi fugiat impedit, fuga debitis quod voluptates reiciendis quasi aperiam voluptatibus perferendis tempora.</p>
                </div>
                <div className={projectBoxes}>
                <img className={imageSize} src={laptopImage} alt="Jesus" />
                <h2>test</h2>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid officia est quia ratione. Cumque possimus porro tempore excepturi fugiat impedit, fuga debitis quod voluptates reiciendis quasi aperiam voluptatibus perferendis tempora.</p>
                </div>

            </div>
        </div>
            )
}
export default Projects;