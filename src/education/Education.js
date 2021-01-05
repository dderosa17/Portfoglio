import React from 'react';
import Style from './StyleEducation';

export const Education = () => {
    return (

        <Style.MainContainerEducation id="education">
            <Style.ContainerEducationWrite >
                <Style.EducationWrite>Education</Style.EducationWrite>
            </Style.ContainerEducationWrite>
            <Style.LineSeparator></Style.LineSeparator>
            <Style.WrapperEducationInfo>
                <Style.WrapperAllEducation>
                    <Style.ContentPropulsionDiploma>
                        <Style.WrapperPropulsionAcademyWrite>
                            <Style.PropulsionAcademyText>Propulsion Academy AG, Zurich</Style.PropulsionAcademyText>
                        </Style.WrapperPropulsionAcademyWrite>
                        <Style.WrapperPropulsionAcademyDecription>
                            <Style.PropulsionAcademyDescription>Full-Stack Development</Style.PropulsionAcademyDescription>
                        </Style.WrapperPropulsionAcademyDecription>
                    </Style.ContentPropulsionDiploma>

                    <Style.ContentIstbqDiploma>
                        <Style.WrapperIstqbWrite>
                            <Style.IstqbText>ISTQB Foundation</Style.IstqbText>
                        </Style.WrapperIstqbWrite>
                        <Style.WrapperIstqbDecription>
                            <Style.IstbqDescription>International Software Testing Qualifications Board </Style.IstbqDescription>
                        </Style.WrapperIstqbDecription>
                    </Style.ContentIstbqDiploma>

                    <Style.ContentOracleDiploma>
                        <Style.WrapperOracleWrite>
                            <Style.OracleText>Oracle Sql</Style.OracleText>
                        </Style.WrapperOracleWrite>
                        <Style.WrapperOracleDecription>
                            <Style.OracleDescription>Database Oracle 12C</Style.OracleDescription>
                        </Style.WrapperOracleDecription>
                    </Style.ContentOracleDiploma>

                    <Style.ContentGioriDiploma>
                        <Style.WrapperGiorgiWrite>
                            <Style.GiorgiText>IIT G.Giorgi, Milan</Style.GiorgiText>
                        </Style.WrapperGiorgiWrite>
                        <Style.WrapperGiorgiDecription>
                            <Style.GiorgiDescription>Administration, Finance and Marketing </Style.GiorgiDescription>
                        </Style.WrapperGiorgiDecription>
                    </Style.ContentGioriDiploma>
                </Style.WrapperAllEducation>

                <Style.WrapperDateEducation>
                    <Style.SingolDivDateEducation>
                        <Style.DateDescription>August - November  2020</Style.DateDescription>
                    </Style.SingolDivDateEducation>
                    <Style.SingolDivDateEducation>
                        <Style.DateDescription>June  2020</Style.DateDescription>
                    </Style.SingolDivDateEducation>
                    <Style.SingolDivDateEducation>
                        <Style.DateDescription>October 2016 - February 2017</Style.DateDescription>
                    </Style.SingolDivDateEducation>
                    <Style.SingolDivDateEducation>
                        <Style.DateDescription>September 2006 - June  2011</Style.DateDescription>
                    </Style.SingolDivDateEducation>
                </Style.WrapperDateEducation>

            </Style.WrapperEducationInfo>
        </Style.MainContainerEducation>

    )
}