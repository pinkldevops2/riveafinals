import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import ImageUploadField from "../components/ImageUploadField";
import CTAButtonField from "../components/CTAButtonField";
import InformedChoicesSectionSlider from "./InformedChoicesSectionSlider";

const InformedChoicesSection = () =>{
    const { register, formState: { errors }, getValues, watch } = useFormContext();

    return(
        <div>
            <div className="card mb-3">
                <div className="card-body">
                    <h3  className="section-heading">Informed Choices</h3>
                    <div className="form-group">
                        <label htmlFor="meetTitle" className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            {...register("template_data.informedChoices.title")}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">Description</label>
                        <textarea className='form-control' {...register("template_data.informedChoices.description")} placeholder="Description" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">CTA Button</label>
                        <CTAButtonField name="template_data.informedChoices.ctaButton"></CTAButtonField>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">Banner</label>
                        <ImageUploadField name="template_data.informedChoices.banner"></ImageUploadField>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">Slider</label>
                        <InformedChoicesSectionSlider name="template_data.informedChoices.slider"></InformedChoicesSectionSlider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InformedChoicesSection