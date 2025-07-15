import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import HighwayHeroSection from "../sections/highway-to-health/HighwayHeroSection";
import YourVascularSection from "../sections/highway-to-health/YourVascularSection";
import HighwaytoHealthSection from "../sections/highway-to-health/HighwaytoHealthSection";
import PreventionTreatmentSection from "../sections/highway-to-health/PreventionTreatmentSection";
import ProtectFutureSection from "../sections/highway-to-health/ProtectFutureSection";
import RIVEAsHighwaySection from "../sections/highway-to-health/RIVEAsHighwaySection";
import PreventionSection from "../sections/highway-to-health/PreventionSection";
import DiagnosticsSection from "../sections/highway-to-health/DiagnosticsSection";
import UnderstandingVascularSection from "../sections/highway-to-health/UnderstandingVascularSection";
import WhoShouldSection from "../sections/highway-to-health/WhoShouldSection";
import VascularDiseaseSection from "../sections/highway-to-health/VascularDiseaseSection";
import TakingChargeSection from "../sections/highway-to-health/TakingChargeSection";



const HighwayToHealthTemplate = () =>{
    const { register, formState: { errors }, getValues, watch } = useFormContext();
    const [content, setContent] = useState("");

    return(
        <div>
            <HighwayHeroSection />
            <YourVascularSection />
            <HighwaytoHealthSection />
            <PreventionTreatmentSection />
            <ProtectFutureSection />
            <RIVEAsHighwaySection />
            <PreventionSection />
            <DiagnosticsSection />
            <UnderstandingVascularSection />
            <WhoShouldSection />
            <TakingChargeSection />
            <VascularDiseaseSection />
        </div>
    )
}

export default HighwayToHealthTemplate