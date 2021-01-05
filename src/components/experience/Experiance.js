import React from 'react';
import Style from './StyleExperiance'

export const Experience = () => {

    // const scrollUp = () => {
    //     document.body.scrollTop = 0;
    //     document.documentElement.scrollTop = 0;
    // }

    return (
        <div id="experience" style={{ paddingTop: "1vh", height: "100vh", width: "100vw" }}>
            <Style.MainContainerExperiance  >
                <Style.ContainerExperianceWrite>
                    <Style.ExperienceWrite>Experience</Style.ExperienceWrite>
                </Style.ContainerExperianceWrite>
                <Style.LineSeparator></Style.LineSeparator>
                <Style.ContainerExperianceCompany>
                    <Style.WrapperExperianceCompany>
                        <Style.WrapperCompanyName>
                            <Style.ContentCompanyName>Information Factory AG, Zurich</Style.ContentCompanyName>
                        </Style.WrapperCompanyName>
                        <Style.WrapperDescriptionRole>
                            <Style.ContentDescriptionRole>Application Support Engineer</Style.ContentDescriptionRole>
                        </Style.WrapperDescriptionRole>


                        <Style.WrapperSabaticalPeriod>
                            <Style.ContentCompanyName>Sabbatical Period</Style.ContentCompanyName>
                        </Style.WrapperSabaticalPeriod>

                        <Style.WrapperDescriptionSabaticalPeriod>
                            <Style.ContentDescriptionSabaticalPriod>Zurich, Switzerland</Style.ContentDescriptionSabaticalPriod>
                        </Style.WrapperDescriptionSabaticalPeriod>

                        <Style.WrapperCompanyNameEveris>
                            <Style.ContentCompanyName>Everis Italia S.p.a, Milan</Style.ContentCompanyName>
                        </Style.WrapperCompanyNameEveris>
                        <Style.WrapperDescriptionRoleEveris>
                            <Style.ContentDescriptionRoleEveris>Application Support Engineer</Style.ContentDescriptionRoleEveris>
                        </Style.WrapperDescriptionRoleEveris>
                    </Style.WrapperExperianceCompany>


                    <Style.WrapperDateJobs>
                        <Style.WrapperDateInformationFactory>
                            <Style.TextDateInformationFactory>February 2019 - July 2020</Style.TextDateInformationFactory>
                        </Style.WrapperDateInformationFactory>

                        <Style.WrapperDateSabaticalPriod>
                            <Style.TextDateSabaticPeriod>October 2017 - January 2019</Style.TextDateSabaticPeriod>
                        </Style.WrapperDateSabaticalPriod>

                        <Style.WrapperDateEveris>
                            <Style.TextDateEveris>March 2017 - September 2017</Style.TextDateEveris>
                        </Style.WrapperDateEveris>


                    </Style.WrapperDateJobs>

                </Style.ContainerExperianceCompany>
            </Style.MainContainerExperiance>
        </div>
    )
}