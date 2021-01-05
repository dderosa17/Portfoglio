import React from 'react';
import Style from './StyleInterests';
import TENNISBALL from '../../images/grosser-tennisball.svg';
import SKIMAN from '../../images/skifahrer.svg';
import GAME from '../../images/spielsteuerung-super-nintendo.svg';
import TRAVEL from '../../images/flugzeug (1).svg';


export const Interests = () => {
    return (

        <Style.MainContainerInterests id="interests" >
            <Style.ContainerInterestsWrite>
                <Style.InterestsWrite>Interests</Style.InterestsWrite>
            </Style.ContainerInterestsWrite>
            <Style.LineSeparator></Style.LineSeparator>
            <Style.Interests>
                <Style.WrapperIcon>
                    <div style={{ display: "flex", height: "6vh", width: "3.6vw", justifyContent: "center" }}>
                        <Style.TennisBall src={TENNISBALL}></Style.TennisBall>
                    </div>
                    <div style={{ display: "flex", height: "6vh", width: "3vw", justifyContent: "center" }}>
                        <Style.SkiMan src={SKIMAN}></Style.SkiMan>
                    </div>
                    <div style={{ display: "flex", height: "7vh", width: "4vw", justifyContent: "center", alignItems: "center" }}>
                        <Style.Game src={GAME}></Style.Game>
                    </div>
                    <div style={{ display: "flex", height: "7vh", width: "3.7vw", justifyContent: "center" }}>
                        <Style.Travel src={TRAVEL}></Style.Travel>
                    </div>
                </Style.WrapperIcon>
                <Style.WrapperDescriptionInterests>
                    <Style.ContentTextDescription>
                        <Style.TextDescriptionInterests>Playing Tennis</Style.TextDescriptionInterests>
                    </Style.ContentTextDescription>
                    <Style.ContentTextDescription>
                        <Style.TextDescriptionInterests>Skiing </Style.TextDescriptionInterests>
                    </Style.ContentTextDescription>
                    <Style.ContentTextDescription>
                        <Style.TextDescriptionInterests>Gaming</Style.TextDescriptionInterests>
                    </Style.ContentTextDescription>
                    <Style.ContentTextDescription>
                        <Style.TextDescriptionInterests>Travelling</Style.TextDescriptionInterests>
                    </Style.ContentTextDescription>
                </Style.WrapperDescriptionInterests>
            </Style.Interests>
        </Style.MainContainerInterests>

    )
}