import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import CommonHeroSection from "../sections/components/CommonHeroSection";
import PioneeringSection from "../sections/interventional-radiology/PioneeringSection";
import TrustRIVEASection from "../sections/interventional-radiology/TrustRIVEASection";
import RadiologySolutionsSection from "../sections/interventional-radiology/RadiologySolutionsSection";
import PersonalizedAttentionSection from "../sections/interventional-radiology/PersonalizedAttentionSection";
import AreasofExpertiseSection from "../sections/interventional-radiology/AreasofExpertiseSection";
import ExperienceFutureSection from "../sections/interventional-radiology/ExperienceFutureSection";

const InterventionalRadiologyTemplate = () =>{
    const { register, formState: { errors }, getValues, watch } = useFormContext();
    const [content, setContent] = useState("");

    return(
        <div>
            <CommonHeroSection />
            <PioneeringSection />
            <TrustRIVEASection />
            <RadiologySolutionsSection />
            <PersonalizedAttentionSection />
            <AreasofExpertiseSection />
            <ExperienceFutureSection />
        </div>
    )
}

export default InterventionalRadiologyTemplate