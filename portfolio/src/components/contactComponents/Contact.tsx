import React from "react";
import ProfileComponent from "./ProfileComponent";
import SocialMedia from "./SocialMedia";
import contactPageCss  from "./contactCss"



const Contact: React.FC = () => {

    const { contactGrid } =contactPageCss;

    return(
        <div >
            <div className={contactGrid}>
            <div><SocialMedia /></div>
            <div><ProfileComponent /></div>
            </div>
        </div>
    )
}
export default Contact;