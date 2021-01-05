import styled from 'styled-components';

const MainContainerSkills = styled.section`
        height:100vh;
        width:100vw;
        padding-top:2vh;
        // border:2px solid white;
`
const ContainerSkillsWrite = styled.section`
    display:flex;
    // justify-content:center;
    align-items:center;
    height:6vh;
    width:8vw;
    margin-left:76.6vw;
    margin-top:10vh;
    // border:2px solid white;
`


const SkillsWrite = styled.h2`
    font-size:3vw;
    font-family: 'Barlow Condensed', sans-serif;
    color:#abbdc9;
`

const LineSeparator = styled.hr`
    color:#abbdc9;   
    width:59vw;   
    margin-left:25vw;
    margin-top:2vh;
    margin-bottom:9.5vh;
`

const WrapperProgrammingLanguageText = styled.section`
    display: flex;
    align-items: center;
    height:7vh;
    width:21vw;
    margin-left:25vw;
    margin-top:15vh;
    // border:solid 2px yellow;

`
const WrapperToolsText = styled.section`
    display: flex;
    align-items: center;
    height:7vh;
    width:21vw;
    margin-left:25vw;
    margin-top:5vh;
    // border:solid 2px yellow;

`

const ProgrammingLanguageToolsText = styled.h3`
    color:#366d9c;
    font-size:1.6vw;
    font-family: 'Barlow Condensed', sans-serif;
`

const WrapperLoghiProgrammingLanguage = styled.section`
    display: flex;
    align-items: center;
    // justify-content:space-evenly;
    height:7vh;
    width:45vw;
    margin-left:25vw;
    margin-top:1.5vh;
    // border:solid 2px white;
`

const WrapperLoghiTools = styled.section`
    display: flex;
    align-items: center;
    // justify-content:space-evenly;
    height:7vh;
    width:38vw;
    margin-left:25vw;
    margin-top:1vh;
    // border:solid 2px white;
`

const LogoHtml = styled.img`
    height:6vh;
    width:6vw;
`

const LogoCSS = styled.img`
    height:6vh;
    width:6vw;
    
`

const LogoJs = styled.img`
    height:6vh;
    width:6vw;
    
`

const LogoReact = styled.img`
    height:5.5vh;
    width:5.5vw;
    margin-left:1vw;
    :hover{
        color:blue;
    }
`

const LogoRedux = styled.img`
    height:5.5vh;
    width:5.5vw;
    margin-left:1vw;
`

const LogoNodeJs = styled.img`
    height:5.5vh;
    width:5.5vw;
    margin-left:1.5vw;
`

const LogoPython = styled.img`
    height:5.5vh;
    width:5.5vw;
    margin-left:2vw;
`

const LogoGitHub = styled.img`
    height:5.5vh;
    width:5.5vw;
    margin-left:0.5vw;
`
const LogoGitLab = styled.img`
    height:5.5vh;
    width:5.5vw;
    margin-left:1.6vw;
`

const LogoPostMan = styled.img`
    height:5.5vh;
    width:5.5vw;
    margin-left:-0.6vw;
`

const LogoJira = styled.img`
    // position:absolute;
    height:5.5vh;
    width:5.5vw;
    margin-left:1.3vw;
`
const LogoConfluence = styled.img`
    height:5vh;
    width:5vw;
    margin-left:1.4vw;
`
const LogoOracle = styled.img`
    height:7.5vh;
    width:7.5vw;
    margin-left:1.5vw;
`


export default {
    MainContainerSkills, ContainerSkillsWrite, LineSeparator, SkillsWrite, WrapperProgrammingLanguageText, WrapperToolsText,
    ProgrammingLanguageToolsText, WrapperLoghiProgrammingLanguage, WrapperLoghiTools, LogoHtml, LogoCSS, LogoJs, LogoReact, LogoRedux,
    LogoNodeJs, LogoPython, LogoGitHub, LogoGitLab, LogoJira, LogoConfluence, LogoOracle, LogoPostMan,
}