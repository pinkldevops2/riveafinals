import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import CommonHeroSection from "../sections/components/CommonHeroSection";
import TakeChargeSection from "../sections/contact-us/TakeChargeSection";
import YourHealthSection from "../sections/contact-us/YourHealthSection";
import ContactDetailsSection from "../sections/contact-us/ContactDetailsSection";
const uploadsUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const ContactUsTemplate = () =>{
    const { register, formState: { errors }, getValues, watch } = useFormContext();
    const [content, setContent] = useState("");

    return(
        <div>
            <CommonHeroSection />
            <YourHealthSection />
            <ContactDetailsSection />
            <TakeChargeSection />
        </div>
    )
}

export default ContactUsTemplate