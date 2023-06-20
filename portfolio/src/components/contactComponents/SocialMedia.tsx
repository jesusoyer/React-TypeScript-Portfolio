import React from "react";
import socialMediaCss from "./socialMediaCss";
import socialMediaLinks from "./socialMediaLinks";
import { SocialIcon } from 'react-social-icons';

import { Tooltip } from "@material-tailwind/react";





const SocialMedia: React.FC = () => {
    const {socialMediaCard, socialMediaGrid, hover, bottomBorder, socialHeader, tooltip} = socialMediaCss;
    const {linkedIn, gitHub, facebook, reactPortfolio, noOpener, target, resume, email} = socialMediaLinks;

    return(
        <div className={socialMediaCard} >
            <h1 className={socialHeader}>Connect With Me</h1>
            <div className={bottomBorder}></div>
            <div className={socialMediaGrid} >

            <Tooltip className={tooltip} content="LinkedIn" placement= "left">
        <div className={hover}>
            <SocialIcon network="linkedin" url={linkedIn} rel={noOpener} target={target} style={{ height: 100, width: 100 }}/>
            </div>
            </Tooltip>
       
            <Tooltip className={tooltip} content="GitHub" placement= "right">
        <div className={hover}>
            <SocialIcon network="github" url={gitHub} rel={noOpener} target={target} style={{ height: 100, width: 100 }}/>
            </div>
            </Tooltip>

            <Tooltip className={tooltip} content="Facebook" placement= "left">
        <div className={hover} >
            <SocialIcon network="facebook" url={facebook} rel={noOpener} target={target} style={{ height: 100, width: 100 }}/>
            </div>
            </Tooltip>

            <Tooltip className={tooltip} content="React Portfolio" placement= "right">
        <div className={hover}>
            <SocialIcon network="sharethis" fgColor="#000000" url={reactPortfolio} rel={noOpener} target={target}  style={{ height: 100, width: 100 }}/>
            </div>
            </Tooltip>

            <Tooltip className={tooltip} content="Resume" placement= "left">
        <div className={hover}>
            <SocialIcon network="sharethis"label="resume" url={resume} rel={noOpener} target={target}   style={{ height: 100, width: 100 }}/>
            </div>
            </Tooltip>

            <Tooltip className={tooltip} content="Email" placement= "right">
        <div className={hover}>
            <SocialIcon network="email" url={email} rel={noOpener} target={target} style={{ height: 100, width: 100 }} />
        </div>
        </Tooltip>
    

        

            </div>

        </div>
    )
}
export default SocialMedia;