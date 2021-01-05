import styled from 'styled-components';

const MainContainerPorfoglio = styled.section`
    display:flex;
    height:100vh;
    width:100vw;
    background-color:#282c34;
    // border:solid 2px blue;
`

const MainContainerRightSide = styled.section`
    display:block;
    overflow-y: scroll;
    scroll-behavior:smooth;
    height:100vh;
    width:100vw; 
    background-color:#282c34;
    // border:solid 2px yellow;
`

const WrapperAboutSection = styled.section`
    height:100vh;
    width:100vw;
    padding-top:1vh;
    // border:2px solid red;
`

const ContainerAboutWrite = styled.section`
    display:flex;
    // justify-content:center;
    align-items:center;
    height:6vh;
    width:10vw;
    margin-left:76vw;
    margin-top:10vh;
    
    // border:2px solid white;
`


const AboutWrite = styled.h2`
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

const ContainerAboutRightSide = styled.section`
    display:flex;
    flex-direction:column;
    justify-content:center;
    // align-items:center;
    // margin-top:1vh;
    height:45vh;
    width:100vw;
    // border:solid 2px white;
`


const ContainerNameLastName = styled.section`
    display:flex;
    // justify-content:center;
    align-items:center;
    height:10vh;
    width:40vw;
    margin-left:25vw;
    // border: solid 2px yellow;
`


const Name = styled.h1`
    // margin-left:60vh;
    font-size:5.6vw;
    font-family: 'Barlow Condensed', sans-serif;
    color:#abbdc9;
`

const LastName = styled.h1`
    font-size:5.6vw;
    font-family: 'Barlow Condensed', sans-serif;
    color:#366d9c;
    margin-left:1vw;
`

const ContainerAddressMail = styled.section`
    display:flex;
    // justify-content:center;
    align-items:center;
    height:5vh;
    width:48.5vw;
    margin-left:25vw;
    margin-top:1.2vh;
    // border:solid 2px white;
`

const AddressText = styled.p`
    font-size:1.6vw;
    color:#abbdc9;
    font-family: 'Barlow Condensed', sans-serif;
    margin-right:0.5vw;
`

const EmailText = styled.a`
    text-decoration:none;
    color:#366d9c;
    font-size:1.6vw;
    font-family: 'Barlow Condensed', sans-serif;
    :hover{
        color:#254e71;
        text-decoration: underline ; 
    }
`


const ContainerRole = styled.section`
    display:flex;
    flex-direction:column;
    justify-content:center;
    // align-items:center;
    height:20vh;
    width:50vw;
    margin-left:25vw;
    margin-top:1vh;
    // border:2px solid yellow;

`

const ContentRoleWrite = styled.div`
    display:flex;
    // justify-content:center;
    align-items:center;
    height:7vh;
    width:30vw;
    // border:2px solid white;
`

const ContentDescriptionMySelf = styled.div`
    // display:flex;
    height:6vh;
    width:30vw;
    // border:2px solid red;
`

const TextFrontEndDeveloper = styled.h2`
    font-size:2.5vw;
    font-family: 'Barlow Condensed', sans-serif;
    color:#abbdc9;
    
`

const ParagraphDescribeMySelf = styled.span`
    color:#abbdc9;
    font-family: 'Barlow Condensed', sans-serif;
    font-size:1.6vw;
`

const ContainerSocialNetwork = styled.div`
    display:flex;
    justify-content:space-evenly;
    // align-items:center;
    height:5vh;
    width:30vh;
    // margin-bottom:2vh;
    // border:2px solid blue;
    margin-left:25vw;
`

const AncorLinkedin = styled.a`
    color:#2e5c85;
    :hover{
        color:#abbdc9;
        
    }
`

const AncorGitHub = styled.a`
    color:#2e5c85;
    :hover{
    color:#abbdc9;
    
}
`

const AncorEmail = styled.a`
    color:#2e5c85;
    :hover{
    color:#abbdc9;
    
}
`

export default {
    MainContainerRightSide, ContainerAboutWrite, AboutWrite, LineSeparator, ContainerAboutRightSide,
    ContainerNameLastName, Name, LastName, ContainerAddressMail, AddressText, EmailText, ContainerRole,
    MainContainerPorfoglio, TextFrontEndDeveloper, ParagraphDescribeMySelf, ContentRoleWrite,
    ContentDescriptionMySelf, ContainerSocialNetwork, AncorLinkedin, AncorGitHub, AncorEmail, WrapperAboutSection
}