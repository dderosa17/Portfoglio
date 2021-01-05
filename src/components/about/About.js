import React from 'react';
import Style from './StyleAbout'
import { SideBar } from '../sideBar/SideBar'
import { Experience } from '../experience/Experiance'
import { Education } from '../../education/Education';
import { Skills } from '../skills/Skills';
import { Interests } from '../interests/Interests';
import { Projects } from '../projects/Projects';
export const About = () => {

    return (
        <>
            <Style.MainContainerPorfoglio>
                <SideBar />
                <Style.MainContainerRightSide >

                    <Style.WrapperAboutSection id="about">
                        <Style.ContainerAboutWrite >
                            <Style.AboutWrite>About</Style.AboutWrite>
                        </Style.ContainerAboutWrite>
                        <Style.LineSeparator></Style.LineSeparator>
                        <Style.ContainerAboutRightSide>
                            <Style.ContainerNameLastName>
                                <Style.Name>DAVIDE</Style.Name>
                                <Style.LastName>DEROSA</Style.LastName>
                            </Style.ContainerNameLastName>
                            <Style.ContainerAddressMail>
                                <Style.AddressText>Alte Landstrasse 154 · 8700 Küsnacht · Zürich ·</Style.AddressText>
                                <Style.EmailText href="Tel:+41787351935" >+41 78 735 19 35</Style.EmailText>
                            </Style.ContainerAddressMail>
                            <Style.ContainerRole>
                                <Style.ContentRoleWrite>
                                    <Style.TextFrontEndDeveloper>Junior Frontend Developer</Style.TextFrontEndDeveloper>
                                </Style.ContentRoleWrite>
                                <Style.ContentDescriptionMySelf>
                                    <Style.ParagraphDescribeMySelf>Fast learner, hard worker, team player</Style.ParagraphDescribeMySelf>
                                </Style.ContentDescriptionMySelf>
                            </Style.ContainerRole>
                            <Style.ContainerSocialNetwork>
                                <Style.AncorLinkedin href="https://www.linkedin.com/in/davide-derosa-146a09107/" target="_blank"><i class="fab fa-linkedin fa-3x fa-circle"></i></Style.AncorLinkedin>
                                <Style.AncorGitHub href="https://github.com/dderosa17" target="_blank"><i class="fab fa-github fa-3x"></i></Style.AncorGitHub>
                                <Style.AncorEmail href="mailto:davidederosa17@gmail.com"><i class="fas fa-envelope fa-3x"></i></Style.AncorEmail>
                            </Style.ContainerSocialNetwork>
                        </Style.ContainerAboutRightSide>
                    </Style.WrapperAboutSection>
                    <Experience />
                    <Education />
                    <Skills />
                    <Interests />
                    <Projects />
                </Style.MainContainerRightSide>

            </Style.MainContainerPorfoglio >
        </>
    )
}