import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import ImageUploadField from "../components/ImageUploadField";
import CTAButtonField from "../components/CTAButtonField";
import HomeSliderSection from "../components/HomeSliderSection";
import TinyMCEEditorField from "@/app/admin/common/TinyMCEEditorField";

const HomeMoreThanTreatmentSection = () =>{
    const { register, formState: { errors }, getValues, watch, setValue } = useFormContext();
   
    return(
        <div>
            <div className="card mb-3">
                <div className="card-body">
                    <h3  className="section-heading">High Tech Meets</h3>
                    <div className="form-group">
                        <label htmlFor="meetTitle" className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            {...register("template_data.treatment.title")}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">Banner</label>
                        <ImageUploadField name="template_data.treatment.banner" ></ImageUploadField>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">Description</label>
                        <TinyMCEEditorField 
                            name="template_data.treatment.description" 
                            editorId={'treatment_description'}
                            register={register}
                            setValue={setValue} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">CTA Button</label>
                        <CTAButtonField name="template_data.treatment.ctaButton"></CTAButtonField>
                    </div>
                    <div className="mb-3">
                        <label>Treatment Slider</label>
                        <HomeSliderSection name="template_data.treatment.slider" />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default HomeMoreThanTreatmentSection