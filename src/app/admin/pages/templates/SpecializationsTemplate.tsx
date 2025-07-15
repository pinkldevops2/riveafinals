import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import CommonHeroSection from "../sections/components/CommonHeroSection";
import AtRiveaSectionSpec from "../sections/specializations/AtRiveaSectionSpec";
import OurCentersSection from "../sections/specializations/OurCentersSection";
import ExploreSection from "../sections/specializations/ExploreSection";
import WhyWeSection from "../sections/specializations/WhyWeSection";
import FutureofCareSection from "../sections/specializations/FutureofCareSection";
import DiscoverSection from "../sections/specializations/DiscoverSection";

const SpecializationsTemplate = () =>{
    const { register, formState: { errors }, getValues, watch } = useFormContext();
    const [content, setContent] = useState("");

    return(
        <div>
            <CommonHeroSection />
            <AtRiveaSectionSpec />
            <OurCentersSection />
            <DiscoverSection />
            <ExploreSection />
            <WhyWeSection />
            <FutureofCareSection />
        </div>
    )
}

export default SpecializationsTemplate