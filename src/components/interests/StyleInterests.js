import styled from 'styled-components';

const MainContainerInterests = styled.section`
    height:100vh;
    width:100vw;
    padding-top:1vh;
    // border:solid 2px yellow;
`
const ContainerInterestsWrite = styled.section`
    display:flex;
    // justify-content:center;
    align-items:center;
    height:6vh;
    width:9vw;
    margin-left:72.7vw;
    margin-top:10vh;
    // border:2px solid white;
`

const InterestsWrite = styled.h2`
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

const Interests = styled.section`
    display:flex;
    height:50vh;
    width:30vw;
    margin-top:12.5vh;
    margin-left:25vw;
    // border:solid 2px yellow;
`

const WrapperIcon = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    height:50vh;
    width:4vw;
    // border:solid 2px red;
`

const TennisBall = styled.img`
    height:6vh;
    width:6vw;
    // margin-right:10vw;
`

const SkiMan = styled.img`
    height:6vh;
    width:6vw;
`

const Game = styled.img`
    height:8vh;
    width:8vw;
`

const Travel = styled.img`
    height:7vh;
    width:5.5vw;
`

const WrapperDescriptionInterests = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    height:50vh;
    width:26vw;
    // border:solid 2px blue;
`

const ContentTextDescription = styled.div`
    height:9vh;
    width:25vw;
    // border:solid 2px white;
`

const TextDescriptionInterests = styled.p`
    color:#abbdc9;
    font-size:1.6vw;
    font-family: 'Barlow Condensed', sans-serif;
    margin-bottom:4vh;
    margin-left:1vw;
`

export default {
    MainContainerInterests, ContainerInterestsWrite, InterestsWrite, LineSeparator,
    Interests, TennisBall, SkiMan, Game, WrapperIcon, WrapperDescriptionInterests, Travel,
    ContentTextDescription, TextDescriptionInterests
}