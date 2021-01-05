import React from 'react';
import Style from './StyleSkills';
import LOGOHTML from '../../images/html5.svg';
import LOGOCSS from '../../images/css-3.svg';
import LOGOJS from '../../images/logo-javascript.svg';
import LOGOREACT from '../../images/react-2.svg';
import LOGOREDUX from '../../images/redux.svg';
import LOGONODEJS from '../../images/nodejs-1.svg';
import LOGOPYTHON from '../../images/python-5.svg';
import LOGOGITHUB from '../../images/github-logo (1).svg';
import LOGOGITLAB from '../../images/gitlab.svg';
import LOGOJIRA from '../../images/jira-3.svg';
import LOGOCONFLUANCE from '../../images/confluence-seeklogo.com.svg';
import LOGORACLE from '../../images/oracle-6.svg';
import LOGOPOSTMAN from '../../images/postman.svg';

export const Skills = () => {

    const mouseOver = (e) => {
        e.currentTarget.setAttribute("fill", "yellow");
    }

    const mouseOut = (e) => {
        e.target.style.color = '#abbdc9'
    }


    return (

        <Style.MainContainerSkills id="skills" >
            <Style.ContainerSkillsWrite>
                <Style.SkillsWrite>Skills</Style.SkillsWrite>
            </Style.ContainerSkillsWrite>
            <Style.LineSeparator></Style.LineSeparator>
            <Style.WrapperProgrammingLanguageText>
                <Style.ProgrammingLanguageToolsText>Programming Language</Style.ProgrammingLanguageToolsText>
            </Style.WrapperProgrammingLanguageText>
            <Style.WrapperLoghiProgrammingLanguage>
                {/* <i class="fab fa-html5 fa-4x" onMouseOver={mouseOver} onMouseOut={mouseOut} style={{ color: "#abbdc9", marginLeft: "2.8vw" }}></i> */}
                <Style.LogoHtml src={LOGOHTML}></Style.LogoHtml>
                <Style.LogoCSS src={LOGOCSS}></Style.LogoCSS>
                {/* <i class="fab fa-css3-alt fa-4x" onMouseOver={mouseOver} onMouseOut={mouseOut} style={{ color: "#abbdc9", marginLeft: "2.7vw" }}></i> */}
                {/* <i class="fab fa-js fa-4x" onMouseOver={mouseOver} onMouseOut={mouseOut} style={{ color: "#abbdc9", marginLeft: "2.7vw" }}></i> */}
                {/* <i class="fab fa-react fa-4x" onMouseOver={mouseOver} onMouseOut={mouseOut} style={{ color: "#abbdc9", marginLeft: "2.5vw" }}></i> */}
                <Style.LogoJs src={LOGOJS}></Style.LogoJs>
                <Style.LogoReact src={LOGOREACT}></Style.LogoReact>
                <Style.LogoRedux src={LOGOREDUX}></Style.LogoRedux>
                <Style.LogoNodeJs src={LOGONODEJS}></Style.LogoNodeJs>
                {/* <i class="fab fa-node fa-4x" onMouseOver={mouseOver} onMouseOut={mouseOut} style={{ color: "#abbdc9", marginLeft: "1.5vw" }}></i> */}
                {/* <i class="fab fa-python fa-4x" onMouseOver={mouseOver} onMouseOut={mouseOut} style={{ color: "#abbdc9", marginLeft: "2.5vw" }}></i> */}
                <Style.LogoPython src={LOGOPYTHON}></Style.LogoPython>
            </Style.WrapperLoghiProgrammingLanguage>
            <Style.WrapperToolsText>
                <Style.ProgrammingLanguageToolsText>Tools/Database</Style.ProgrammingLanguageToolsText>
            </Style.WrapperToolsText>
            <Style.WrapperLoghiTools>
                <Style.LogoGitHub src={LOGOGITHUB}></Style.LogoGitHub>
                {/* <i class="fab fa-github fa-4x" onMouseOver={mouseOver} onMouseOut={mouseOut} style={{ color: "#abbdc9" }}></i> */}
                <Style.LogoGitLab src={LOGOGITLAB}></Style.LogoGitLab>
                {/* <i class="fab fa-gitlab fa-4x" onMouseOver={mouseOver} onMouseOut={mouseOut} style={{ color: "#abbdc9" }}></i> */}
                <Style.LogoPostMan src={LOGOPOSTMAN}></Style.LogoPostMan>
                <Style.LogoJira src={LOGOJIRA}></Style.LogoJira>
                {/* <i class="fab fa-jira fa-4x" onMouseOver={mouseOver} onMouseOut={mouseOut} style={{ color: "#abbdc9" }} ></i> */}
                {/* <i class="fab fa-confluence fa-4x" onMouseOver={mouseOver} onMouseOut={mouseOut} style={{ color: "#abbdc9" }} ></i> */}
                <Style.LogoConfluence src={LOGOCONFLUANCE}></Style.LogoConfluence>
                <Style.LogoOracle src={LOGORACLE} onMouseOver={mouseOver} onMouseOut={mouseOut}></Style.LogoOracle>
            </Style.WrapperLoghiTools>
        </Style.MainContainerSkills>


    )
}