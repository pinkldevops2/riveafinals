import React, { useState, useEffect } from "react";
import TinyMCEEditor from '@/app/admin/common/TinyMCEEditor';
import { useFormContext } from "react-hook-form";
import CommonHeroSection from "../sections/components/CommonHeroSection";
import AtRiveaSection from "../sections/about/AtRiveaSection";
import CommonYourHealthSection from "../sections/components/CommonYourHealthSection";
import StatementsSection from "../sections/about/StatementsSection";
import VascularCenterSection from "../sections/about/VascularCenterSection";
import LedBySection from "../sections/about/LedBySection";
import BeyondHealthcareSection from "../sections/about/BeyondHealthcareSection";
import YourNeedsSection from "../sections/about/YourNeedsSection";
const uploadsUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const AboutTemplate = () =>{
    const { register, formState: { errors }, getValues, watch } = useFormContext();
    const [content, setContent] = useState("");

    return(
        <div>
            <CommonHeroSection />
            <AtRiveaSection />
            <StatementsSection />
            <VascularCenterSection />
            <LedBySection />
            <BeyondHealthcareSection />
            <YourNeedsSection />
            <CommonYourHealthSection />
        </div>
    )
}

export default AboutTemplate