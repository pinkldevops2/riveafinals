import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import CommonHeroSection from "../sections/components/CommonHeroSection";
import HealthyCirculationSection from "../sections/vascular-endovascular-surgery/HealthyCirculationSection";
import VascularCareSection from "../sections/vascular-endovascular-surgery/VascularCareSection";
import AdvancedVascularSection from "../sections/vascular-endovascular-surgery/AdvancedVascularSection";
import TakeControlSection from "../sections/vascular-endovascular-surgery/TakeControlSection";
import VisionaryLeaderSection from "../sections/vascular-endovascular-surgery/VisionaryLeaderSection";


const VascularEndovascularSurgeryTemplate = () =>{
    const { register, formState: { errors }, getValues, watch } = useFormContext();
    const [content, setContent] = useState("");

    return(
        <div>
            <CommonHeroSection />
            <HealthyCirculationSection />
            <VascularCareSection />
            <AdvancedVascularSection />
            <TakeControlSection />
            <VisionaryLeaderSection />
        </div>
    )
}

export default VascularEndovascularSurgeryTemplate