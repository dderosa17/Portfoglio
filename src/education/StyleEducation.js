import styled from 'styled-components';

const MainContainerEducation = styled.section`
    height:100vh;
    width:100vw;
    padding-top:2vh;
    // border:solid 2px white;
`

const ContainerEducationWrite = styled.section`
    display:flex;
    // justify-content:center;
    align-items:center;
    height:6vh;
    width:12vw;
    margin-left:71.5vw;
    margin-top:10vh;
    // border:2px solid white;
`

const EducationWrite = styled.h2`
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

const WrapperEducationInfo = styled.section`
    display:flex;
    height:60vh;
    width:58.7vw;
    margin-left:25vw;
    // border:solid 2px yellow;
`

const WrapperAllEducation = styled.section`
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    height:60vh;
    width:25vw;
    // border:solid 2px white;
`

const WrapperDateEducation = styled.section`
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    height:60vh;
    width:25vw;
    margin-left:8.5vw;
    // border:solid 2px white;
`

const SingolDivDateEducation = styled.div`
    display:flex;
    align-items:center;
    height:11vh;
    width:23.1vw;
    // border:solid blue 2px;

`

const DateDescription = styled.p`
    color:#abbdc9;
    // color:#366d9c;
    font-size:1.5vw;
    font-family: 'Barlow Condensed', sans-serif;
    margin-left:auto;
`

const ContentPropulsionDiploma = styled.section`
    display:flex;
    flex-direction:column;
    height:11vh;
    width:20vw;
    // border:solid 2px white;
`

const ContentGioriDiploma = styled.section`
    display:flex;
    flex-direction:column;
    height:11vh;
    width:20vw;
    // border:solid 2px white;
`

const ContentIstbqDiploma = styled.section`
    display:flex;
    flex-direction:column;
    height:11vh;
    width:25vw;
    // border:solid 2px white;
`


const ContentOracleDiploma = styled.section`
    display:flex;
    flex-direction:column;
    height:11vh;
    width:20vw;
    // border:solid 2px white;
`

const WrapperPropulsionAcademyWrite = styled.div`
    display:flex;
    // justify-content:center;
    align-items:center;
    height:5vh;
    width:19.5vw;
    // border:solid 2px blue;
`

const WrapperGiorgiWrite = styled.div`
    display:flex;
    // justify-content:center;
    align-items:center;
    height:5vh;
    width:19.5vw;
    // border:solid 2px blue;
`


const WrapperOracleWrite = styled.div`
    display:flex;
    // justify-content:center;
    align-items:center;
    height:5vh;
    width:19.5vw;
    // border:solid 2px blue;
`

const WrapperIstqbWrite = styled.div`
    display:flex;
    // justify-content:center;
    align-items:center;
    height:5vh;
    width:19.5vw;
    // border:solid 2px blue;
`

const WrapperPropulsionAcademyDecription = styled.div`
    display:flex;
    align-items:center;
    height:5vh;
    width:19.5vw;
    // border:solid 2px blue;
`

const WrapperGiorgiDecription = styled.div`
    display:flex;
    align-items:center;
    height:5vh;
    width:19.5vw;
    // border:solid 2px blue;
`

const WrapperOracleDecription = styled.div`
    display:flex;
    align-items:center;
    height:5vh;
    width:19.5vw;
    // border:solid 2px blue;
`

const WrapperIstqbDecription = styled.div`
    display:flex;
    align-items:center;
    height:5vh;
    width:25vw;
    // border:solid 2px blue;
`

const PropulsionAcademyText = styled.h3`
    color:#abbdc9;
    font-size:1.6vw;
    font-family: 'Barlow Condensed', sans-serif;
`

const GiorgiText = styled.h3`
    color:#abbdc9;
    font-size:1.6vw;
    font-family: 'Barlow Condensed', sans-serif;
`

const OracleText = styled.h3`
    color:#abbdc9;
    font-size:1.6vw;
    font-family: 'Barlow Condensed', sans-serif;
`

const IstqbText = styled.h3`
    color:#abbdc9;
    font-size:1.6vw;
    font-family: 'Barlow Condensed', sans-serif;
`

const PropulsionAcademyDescription = styled.p`
    color:#366d9c;
    font-size:1.4vw;
    font-family: 'Barlow Condensed', sans-serif;
    margin-bottom:4vh;
`

const GiorgiDescription = styled.p`
    color:#366d9c;
    font-size:1.4vw;
    font-family: 'Barlow Condensed', sans-serif;
    margin-bottom:4vh;
`

const OracleDescription = styled.p`
    color:#366d9c;
    font-size:1.4vw;
    font-family: 'Barlow Condensed', sans-serif;
    margin-bottom:4vh;
`

const IstbqDescription = styled.p`
    color:#366d9c;
    font-size:1.4vw;
    font-family: 'Barlow Condensed', sans-serif;
    margin-bottom:4vh;
`

export default {
    MainContainerEducation, ContainerEducationWrite, EducationWrite, LineSeparator,
    WrapperEducationInfo, ContentPropulsionDiploma, WrapperPropulsionAcademyWrite,
    WrapperPropulsionAcademyDecription, PropulsionAcademyText, PropulsionAcademyDescription,
    ContentIstbqDiploma, WrapperIstqbWrite, IstqbText, WrapperIstqbDecription, IstbqDescription,
    ContentOracleDiploma, WrapperOracleWrite, OracleText, WrapperOracleDecription, OracleDescription,
    ContentGioriDiploma, WrapperGiorgiWrite, GiorgiText, WrapperGiorgiDecription, GiorgiDescription,
    WrapperAllEducation, WrapperDateEducation, SingolDivDateEducation, DateDescription

}