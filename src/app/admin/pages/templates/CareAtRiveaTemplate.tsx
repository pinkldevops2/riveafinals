import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import CommonHeroSection from "../sections/components/CommonHeroSection";
import ConnectWithSection from "../sections/care-at-rivea/ConnectWithSection";
import PersonalizedSection from "../sections/care-at-rivea/PersonalizedSection";
import AdvancedTelemedicineSection from "../sections/care-at-rivea/AdvancedTelemedicineSection";
import DedicatedPatientSection from "../sections/care-at-rivea/DedicatedPatientSection";
import QualityAssuranceSection from "../sections/care-at-rivea/QualityAssuranceSection";
import GetClaritySection from "../sections/care-at-rivea/GetClaritySection";
import YourHealthSection from "../sections/care-at-rivea/YourHealthSection";

const CareAtRiveaTemplate = () =>{
    const { register, formState: { errors }, getValues, watch } = useFormContext();
    const [content, setContent] = useState("");

    return(
        <div>
            <CommonHeroSection />
            <ConnectWithSection />
            <PersonalizedSection />
            <AdvancedTelemedicineSection />
            <DedicatedPatientSection />
            <QualityAssuranceSection />
            <GetClaritySection />
            <YourHealthSection />
        </div>
    )
}

export default CareAtRiveaTemplate