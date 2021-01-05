import styled from 'styled-components';



const MainContainerExperiance = styled.section`
    height:100vh;
    width:100vw;
    // border:solid 2px blue;
    // margin-top:32vh;
    background-color:#282c34;
`

const ContainerExperianceWrite = styled.section`
    display:flex;
    // justify-content:center;
    align-items:center;
    height:6vh;
    width:12vw;
    margin-left:70vw;
    margin-top:10vh;
    // border:2px solid white;
`


const ExperienceWrite = styled.h2`
    font-size:3vw;
    font-family: 'Barlow Condensed', sans-serif;
    color:#abbdc9;
`


const LineSeparator = styled.hr`
    color:#abbdc9;   
    width:59vw;   
    margin-left:25vw;
    margin-top:2vh;
    margin-bottom:12.9vh;
`

const ContainerExperianceCompany = styled.section`
    display:flex;
    height:48vh;
    width:59vw;
    margin-left:25vw;
    // border:white 2px solid;

`

const WrapperExperianceCompany = styled.section`
    display:flex;
    flex-direction:column;
    height:45vh;
    width:20.2vw;
    // border:red 2px solid;

`

const WrapperCompanyName = styled.div`
    display:flex;
    // justify-content:center;
    align-items:center;
    // flex-direction:column;
    height:5vh;
    width:20vw;
    // border:solid yellow 2px;
`
const WrapperSabaticalPeriod = styled.div`
    display:flex;
    align-items:center;
    height:5vh;
    width:20vw;
    margin-top:10vh;
    // border:solid yellow 2px;
`

const WrapperCompanyNameEveris = styled.div`
    display:flex;
    align-items:center;
    height:5vh;
    width:20vw;
    margin-top:9.8vh;
    // border:solid yellow 2px;
`



const ContentCompanyName = styled.h3`
    color:#abbdc9;
    font-size:1.6vw;
    font-family: 'Barlow Condensed', sans-serif;
`

const WrapperDescriptionRole = styled.div`
    display:flex;
    // justify-content:center;
    align-items:center;
    height:4vh;
    width:20vw;
    // border:solid yellow 2px;
`

const WrapperDescriptionRoleEveris = styled.div`
    display:flex;
    // justify-content:center;
    align-items:center;
    height:4vh;
    width:20vw;
    // border:solid yellow 2px;
`

const WrapperDescriptionSabaticalPeriod = styled.div`
    display:flex;
    align-items:center;
    height:4vh;
    width:20vw;
    // border:solid yellow 2px;
`

const ContentDescriptionRole = styled.p`
    // color:#abbdc9;
    color:#366d9c;
    font-size:1.4vw;
    font-family: 'Barlow Condensed', sans-serif;
    
`

const ContentDescriptionRoleEveris = styled.p`
    // color:#abbdc9;
    color:#366d9c;
    font-size:1.4vw;
    font-family: 'Barlow Condensed', sans-serif;
    
`

const ContentDescriptionSabaticalPriod = styled.p`
    // color:#abbdc9;
    color:#366d9c;
    font-size:1.4vw;
    font-family: 'Barlow Condensed', sans-serif;

`

const WrapperDateJobs = styled.section`
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    height:47vh;
    width:30vw;
    margin-left: auto;
    // border:solid 2px blue;
`

const WrapperDateInformationFactory = styled.div`
    height:7vh;
    width:20vw;
    margin-left:7.5vw;
    // border: solid 2px yellow;
`

const TextDateInformationFactory = styled.p`
    color:#abbdc9;
    font-size:1.5vw;
    font-family: 'Barlow Condensed', sans-serif;
    margin-left: 6.9vw;
`


const WrapperDateEveris = styled.div`
    height:8vh;
    width:20vw;
    margin-top:11vh;
    margin-left:7.5vw;
    // border: solid 2px yellow;
`

const WrapperDateSabaticalPriod = styled.div`
    height:8vh;
    width:20vw;
    margin-top:12vh;
    margin-left:7.5vw;
    // border: solid 2px green;
`

const TextDateEveris = styled.p`
    color:#abbdc9;
    font-size:1.5vw;
    font-family: 'Barlow Condensed', sans-serif;
    margin-left: 5.2vw;
`

const TextDateSabaticPeriod = styled.p`
    color:#abbdc9;
    font-size:1.5vw;
    font-family: 'Barlow Condensed', sans-serif;
    margin-left: 5.7vw;
`

export default {
    MainContainerExperiance, ContainerExperianceWrite, ExperienceWrite, LineSeparator, WrapperExperianceCompany,
    ContainerExperianceCompany, ContentCompanyName, WrapperCompanyName, ContentDescriptionRole,
    WrapperDescriptionRole, WrapperDateJobs, WrapperDateInformationFactory, TextDateInformationFactory,
    WrapperDateEveris, TextDateEveris, WrapperCompanyNameEveris, WrapperDateSabaticalPriod,
    WrapperDescriptionRoleEveris, ContentDescriptionRoleEveris, WrapperSabaticalPeriod,
    WrapperDescriptionSabaticalPeriod, ContentDescriptionSabaticalPriod, TextDateSabaticPeriod

}