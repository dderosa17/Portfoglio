import styled from 'styled-components';
import { Link } from 'react-router-dom'


const MainContainerSideBar = styled.section`
    position:fixed;
    display:flex;
    // justify-content:center;
    align-items:center;
    flex-direction:column;
    height:100vh;
    width:17vw;
    background-color: #2e5c85;
    // border:solid 2px green;
`

const DivContainerProfilePicture = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:22vh;
    width:12vw;
    margin-top:4vh;
    // border:2px solid white;
`


const ImgProfile = styled.img`
    border-radius:50%;
    border:3px solid #282c34 ;
    height:15vh;
    width:8vw;
`

const MainContainerAllText = styled.section`
    display:flex;
   justify-content:space-evenly;
    align-items:center;
    flex-direction:column;
    height:60vh;
    width:20.7vw;
    // border:solid 2px white;
`

const ContainerAboutText = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:6vh;
    width:20vw; 
    // border:solid 2px white;
`

const StyledLink = styled(Link)`
    text-decoration: none;

`

const ContainerExperienceText = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:6vh;
    width:20vw; 
    text-decoration: none;
    // border:solid 2px white;
`

const ContainerEducationText = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:6vh;
    width:20vw; 
    // border:solid 2px white;
`

const ContainerSkillsText = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:6vh;
    width:20vw; 
    // border:solid 2px white;
`

const ContainerInterestsText = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:6vh;
    width:20vw; 
    // border:solid 2px white;
`

const ContainerProjectsText = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:6vh;
    width:20vw; 
    // border:solid 2px white;
`

const AboutText = styled.a`
    font-size:1.8vw;
    font-family: 'Barlow Condensed', sans-serif;
    font-weight:600;
    color:#abbdc9;
    text-decoration:none;
    cursor:pointer;
    transition:0.5s;
    :hover{
        color:#282c34;
        transition:0.5s;
    }
`

const ExperienceText = styled.a`
    font-size:1.8vw;
    font-family: 'Barlow Condensed', sans-serif; 
    font-weight:600;   
    color:#abbdc9;
    text-decoration:none;
    cursor:pointer;
    :hover{
        color:#282c34;
        transition:0.5s;
    }
`

const EducationText = styled.a`
    font-size:1.8vw;
    font-family: 'Barlow Condensed', sans-serif; 
    font-weight:600;
    color:#abbdc9;
    text-decoration:none;
    cursor:pointer;
    
    :hover{
        color:#282c34;
        transition:0.5s;
    }
`

const SkillsText = styled.a`
    font-size:1.8vw;
    font-family: 'Barlow Condensed', sans-serif;  
    font-weight:600;
    color:#abbdc9;
    text-decoration:none;
    cursor:pointer;
    :hover{
        color:#282c34;
        transition:0.5s;
    }
`


const InterestsText = styled.a`
    font-size:1.8vw;
    font-family: 'Barlow Condensed', sans-serif;
    font-weight:600;
    color:#abbdc9;
    cursor:pointer;
    text-decoration:none;
    :hover{
        color:#282c34;
        transition:0.5s;
    }
`

const ProjectsText = styled.a`
    font-size:1.8vw;  
    font-family: 'Barlow Condensed', sans-serif;
    font-weight:600;
    color:#abbdc9;
    cursor:pointer;
    text-decoration:none;
    :hover{
        color:#282c34;
        transition:0.5s;
    }
`





export default {
    MainContainerSideBar, DivContainerProfilePicture,
    ImgProfile, ContainerAboutText, AboutText, MainContainerAllText, ContainerExperienceText, ExperienceText,
    ContainerEducationText, EducationText, ContainerSkillsText, SkillsText, ContainerInterestsText, InterestsText,
    ContainerProjectsText, ProjectsText, StyledLink
}

