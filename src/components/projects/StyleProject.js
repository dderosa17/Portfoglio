import styled from 'styled-components';
import POSTS from '../../images/posts.png';
import MOTION from '../../images/motion.png';
import SHOPPINGCART from '../../images/shoppingcart.png';
import PRICE from '../../images/price.png';
import TODO from '../../images/todo.png';
import TODOLIST from '../../images/todolist.png';
import LUNA from '../../images/luna.png';


const testSlide = styled.div`
    height: 40vh;
    width:40vw;
    border:solid 2px greenyellow;
    background-color: greenyellow;
`


const MainContainerProjects = styled.section`
        height:100vh;
        width:100vw;
        padding-top:2vh;
        // border:2px solid white;
`

const ContainerProjectsWrite = styled.section`
    display:flex;
    align-items:center;
    height:6vh;
    width:8vw;
    margin-left:73.5vw;
    margin-top:8vh;
    // border:2px solid white;
`
const ProjectsWrite = styled.h2`
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

const WrapperImagesProject = styled.section`
    display:flex;
    align-items:center;
    justify-content:center;
    transition:0.5;
    // flex-direction:column;
    height:48vh;
    width:59vw;
    margin-left:25vw; 
    // margin-top:15vh;
    // border: solid 2px white;
    background-size: cover;
    background-position:center;
`

const ContentImgesMotion = styled.div`
    height:30vh;
    width:29vw;
    // border:solid 2px blue;
    // margin-right:2vw;
    background-image:url(${MOTION});
    background-size: cover;
    background-position:center;
    transition: background-image 0.5s ease-in-out;
    cursor:pointer;
    :hover{
    background-size: cover;
    background-position:center;
    background-image:url(${POSTS});
}
    
`

const ContentImgesHoppingCart = styled.div`
    height:30vh;
    width:29vw;
    margin-top:1vh;
    // border:solid 2px blue;
    // margin-right:2vw;
    background-size: cover;
    background-position:center;
    transition: background-image 0.5s ease-in-out;
    cursor:pointer;
    background-image:url(${SHOPPINGCART});
    :hover{
    background-size:cover;
    background-position:center;
    background-image:url(${PRICE});
    }
`
const ContentLuna = styled.div`
    height:30vh;
    width:29vw;
    // border:solid 2px blue;
    // margin-right:2vw;
    background-size: cover;
    background-position:center;
    transition: background-image 0.5s ease-in-out;
    cursor:pointer;
    background-image:url(${LUNA});
    :hover{
    background-size:cover;
    background-position:center;
    background-image:url(${TODO});
    }
`

const TodoList = styled.div`
    height:30vh;
    width:29vw;
    border:solid 2px blue;
    // margin-right:2vw;
    margin-top:1vh;
    background-size: cover;
    background-position:center;
    background-repeat: no-repeat;
    transition: background-image 0.5s ease-in-out;
    cursor:pointer;
    background-image:url(${TODO});
    :hover{
    // background-size:cover;
    // background-position:center;
    background-image:url(${TODOLIST});
    }
`

const WrapperArrowLeft = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:55vh;
    width:5vw;
    // border:solid 2px yellow;

`
const WrapperArrowRight = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:55vh;
    width:5vw;
    margin-left:auto;
    // border:solid 2px yellow;
`

const WrapperImagesCarousel = styled.div`
    display:flex;
    justify-content:center;
    align-items:center; 
    height:45vh;    
    width:50vw;
    // background-image:url(${MOTION});
    // background-size: cover;
    // background-position:center;
    // border:solid 2px red;
`

const slide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40vh;
    width: 43vw;
    // border:2px solid yellow;
`

const wrapperClickHereToSeeTheCode = styled.section`
    display:flex;
    align-items:center;
    height:10vh;
    width:30vw;
    margin-left:33vw;
    margin-top:7.5vw;
    // border:solid 2px yellow;
`
const ClickHereToSeeTheCodetext = styled.h3`
    color:#abbdc9;
    font-size:1.6vw;
    font-family: 'Barlow Condensed', sans-serif;
`
export default {
    ContainerProjectsWrite, MainContainerProjects, ProjectsWrite, LineSeparator,
    WrapperImagesProject, ContentImgesHoppingCart, ContentLuna,
    ContentImgesMotion, TodoList, WrapperArrowLeft, WrapperArrowRight, WrapperImagesCarousel,
    testSlide, slide, wrapperClickHereToSeeTheCode, ClickHereToSeeTheCodetext
}