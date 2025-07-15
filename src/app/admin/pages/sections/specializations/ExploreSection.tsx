import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import CTAButtonField from "../components/CTAButtonField";

const ExploreSection = () =>{
    const { register, formState: { errors }, getValues, watch } = useFormContext();
    return(
        <div>
            <div className="card mb-3">
                <div className="card-body">
                    <h3  className="section-heading">Explore (Second Tab)</h3>
                    <div className="form-group">
                        <label htmlFor="meetTitle" className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            {...register("template_data.helth.title")}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">CTA Button 1</label>
                        <CTAButtonField name="template_data.helth.ctaButton1"></CTAButtonField>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">CTA Button 2</label>
                        <CTAButtonField name="template_data.helth.ctaButton2"></CTAButtonField>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExploreSection