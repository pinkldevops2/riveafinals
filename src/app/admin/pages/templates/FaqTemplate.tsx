import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import FaqHeroSection from "../sections/faq/FaqHeroSection";
import HaveQuestionsSection from "../sections/faq/HaveQuestionsSection";
import ReachOutSection from "../sections/faq/ReachOutSection";

const FaqTemplate = () =>{
    const { register, formState: { errors }, getValues, watch } = useFormContext();
    const [content, setContent] = useState("");

    return(
        <div>
            <FaqHeroSection />
            <HaveQuestionsSection />
            <ReachOutSection />
        </div>
    )
}

export default FaqTemplate