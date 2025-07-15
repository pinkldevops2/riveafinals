import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import HomeHighTechMeetsSection from "../sections/home/HomeHighTechMeetsSection";
import HomeRegionsFirstSection from "../sections/home/HomeRegionsFirstSection";
import HomeFromComplexitySection from "../sections/home/HomeFromComplexitySection";
import HomeUnderstandingYouSection from "../sections/home/HomeUnderstandingYouSection";
import HomeMoreThanTreatmentSection from "../sections/home/HomeMoreThanTreatmentSection";
import CommonYourHealthSection from "../sections/components/CommonYourHealthSection";
import HomeHeroSection from "../sections/home/HomeHeroSection";
const uploadsUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const HomeTemplate = () =>{
    const { register, formState: { errors }, getValues, watch } = useFormContext();
    const [content, setContent] = useState("");

    return(
        <div>
            <HomeHeroSection />
            <HomeHighTechMeetsSection />
            <HomeRegionsFirstSection />
            <HomeFromComplexitySection />
            <HomeUnderstandingYouSection />
            <HomeMoreThanTreatmentSection />
            <CommonYourHealthSection />
        </div>
    )
}

export default HomeTemplate