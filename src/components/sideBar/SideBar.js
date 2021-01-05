import React from 'react';
import Style from './StyleSideBar';
import IMGPROFILE from '../../images/imgProfile.JPG';



export const SideBar = () => {

    return (

        <Style.MainContainerSideBar>
            <Style.DivContainerProfilePicture>
                <Style.ImgProfile src={IMGPROFILE}></Style.ImgProfile>
            </Style.DivContainerProfilePicture>
            <Style.MainContainerAllText>
                <Style.ContainerAboutText>
                    <Style.AboutText href="#about">About</Style.AboutText>
                </Style.ContainerAboutText>
                <Style.ContainerExperienceText>
                    <Style.ExperienceText href="#experience">Experience</Style.ExperienceText>
                </Style.ContainerExperienceText>
                <Style.ContainerEducationText>
                    <Style.EducationText href="#education">Education</Style.EducationText>
                </Style.ContainerEducationText>
                <Style.ContainerSkillsText>
                    <Style.SkillsText href="#skills">Skills</Style.SkillsText>
                </Style.ContainerSkillsText>
                <Style.ContainerInterestsText>
                    <Style.InterestsText href="#interests">Interests</Style.InterestsText>
                </Style.ContainerInterestsText>
                <Style.ContainerProjectsText>
                    <Style.ProjectsText href="#projects">Projects</Style.ProjectsText>
                </Style.ContainerProjectsText>
            </Style.MainContainerAllText>
        </Style.MainContainerSideBar>
    )
}