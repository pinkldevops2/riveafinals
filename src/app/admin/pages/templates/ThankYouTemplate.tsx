import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import ThankYouSection from "../sections/thank-you/ThankYouSection";

const ThankYouTemplate = () =>{
    const { register, formState: { errors }, getValues, watch } = useFormContext();
    const [content, setContent] = useState("");

    return(
        <div>
            <ThankYouSection />
        </div>
    )
}

export default ThankYouTemplate