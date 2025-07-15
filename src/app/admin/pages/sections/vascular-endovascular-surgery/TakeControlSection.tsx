import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import CTAButtonField from "../components/CTAButtonField";

const TakeControlSection = () =>{
    const { register, formState: { errors }, getValues, watch } = useFormContext();
    return(
        <div>
            <div className="card mb-3">
                <div className="card-body">
                    <h3  className="section-heading">Take Control</h3>
                    <div className="form-group">
                        <label htmlFor="meetTitle" className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Hero Title"
                            {...register("template_data.experienceFuture.title")}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">CTA Button</label>
                        <CTAButtonField name="template_data.experienceFuture.ctaButton"></CTAButtonField>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TakeControlSection