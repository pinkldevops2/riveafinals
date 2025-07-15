import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import CommonHeroSection from "../sections/components/CommonHeroSection";
import AdvancedTreatmentsSection from "../sections/conditions-we-treat/AdvancedTreatmentsSection";
import PersonalizedAttentionSection from "../sections/conditions-we-treat/PersonalizedAttentionSection";
import OurCommitmentSection from "../sections/conditions-we-treat/OurCommitmentSection";
import YourQuestionsSection from "../sections/conditions-we-treat/YourQuestionsSection";
import InformedChoicesSection from "../sections/conditions-we-treat/InformedChoicesSection";

const ConditionsWeTreatTemplate = () =>{
    const { register, formState: { errors }, getValues, watch } = useFormContext();
    const [content, setContent] = useState("");

    return(
        <div>
            <CommonHeroSection />
            <AdvancedTreatmentsSection />
            <PersonalizedAttentionSection />
            <OurCommitmentSection />
            <YourQuestionsSection />
            <InformedChoicesSection />
        </div>
    )
}

export default ConditionsWeTreatTemplate