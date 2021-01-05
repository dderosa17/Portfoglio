import React from 'react';
import Style from './StyleProject';
// import './Projects.css';
import Carousel from 'react-elastic-carousel';
import MOTION from '../../images/motion.png';
import LUNA from '../../images/luna.png';
import SHOPPINGCART from '../../images/shoppingcart.png';
import LUNAREST from '../../images/lunaRest.png';

export const Projects = () => {



    return (

        <Style.MainContainerProjects id="projects">
            <Style.ContainerProjectsWrite>
                <Style.ProjectsWrite>Projects</Style.ProjectsWrite>
            </Style.ContainerProjectsWrite>
            <Style.LineSeparator></Style.LineSeparator>
            <Style.wrapperClickHereToSeeTheCode>
                <Style.ClickHereToSeeTheCodetext>Click the Image to see the code</Style.ClickHereToSeeTheCodetext>
            </Style.wrapperClickHereToSeeTheCode>
            <Style.WrapperImagesProject>


                <Style.WrapperImagesCarousel>

                    <Carousel >
                        <Style.slide><a href="https://github.com/dderosa17/Motion-Social-Network" target="_blank"><img src={MOTION} style={{ height: "45vh", width: "43vw" }}></img></a></Style.slide>
                        <Style.slide><img src={LUNA} style={{ height: "40vh", width: "43vw" }}></img></Style.slide>
                        <Style.slide><img src={LUNAREST} style={{ height: "40vh", width: "43vw" }}></img></Style.slide>
                        <Style.slide><img src={SHOPPINGCART} style={{ height: "40vh", width: "43vw" }}></img></Style.slide>
                    </Carousel>

                </Style.WrapperImagesCarousel>

            </Style.WrapperImagesProject>
        </Style.MainContainerProjects>

    )
}