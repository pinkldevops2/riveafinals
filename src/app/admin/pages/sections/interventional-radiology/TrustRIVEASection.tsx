import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import ImageUploadField from "../components/ImageUploadField";
import TrustRIVEASectionAccordion from "./TrustRIVEASectionAccordion";

const TrustRIVEASection = () =>{
    const { register, formState: { errors }, getValues, watch } = useFormContext();

    return(
        <div>
            <div className="card mb-3">
                <div className="card-body">
                    <h3  className="section-heading">Trust RIVEA</h3>
                    <div className="form-group">
                        <label htmlFor="meetTitle" className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            {...register("template_data.trustRIVEA.title")}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Items</label>
                        <TrustRIVEASectionAccordion name="template_data.trustRIVEA.accordionItems" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrustRIVEASection