import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import ImageUploadField from "../components/ImageUploadField";
import OurCommitmentSectionAccordion from "./OurCommitmentSectionAccordion";

const OurCommitmentSection = () =>{
    const { register, formState: { errors }, getValues, watch } = useFormContext();

    return(
        <div>
            <div className="card mb-3">
                <div className="card-body">
                    <h3  className="section-heading">Our Commitment</h3>
                    <div className="form-group">
                        <label htmlFor="meetTitle" className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            {...register("template_data.ourCommitment.title")}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Background Image</label>
                        <ImageUploadField name="template_data.ourCommitment.doctor_image" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Items</label>
                        <OurCommitmentSectionAccordion name="template_data.ourCommitment.accordionItems" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurCommitmentSection