import React from "react";
import { Link } from 'react-router-dom'
import { IoHomeOutline,IoAppsSharp, IoInformationCircleOutline,IoBody } from "react-icons/io5"



const NavigationBar: React.FC = () => {

const navCss: string = "flex justify-center items-center space-x-10 my-4 bg-white"
const navSize: string =""
// const logoSize: string ="basis-3/4"



    return(
        
        <div className={navCss}>
            {/* <div className={logoSize}>logo</div> */}
            <div className={navSize}><Link to="/home"><IoHomeOutline/></Link></div>
            <div ><Link to="/projects"><IoAppsSharp /></Link></div>
            <div><Link to="/interests"><IoBody /></Link></div>
            <div ><Link to="/Contact"><IoInformationCircleOutline /></Link></div>
        </div>
        
    )
}
export default NavigationBar;