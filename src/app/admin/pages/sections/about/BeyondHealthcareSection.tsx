import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import SliderWithImage from "../components/SliderWithImage";
import TinyMCEEditorField from "@/app/admin/common/TinyMCEEditorField";

const BeyondHealthcareSection = () =>{
    const { register, formState: { errors }, getValues, watch,setValue } = useFormContext();

    return(
        <div>
            <div className="card mb-3">
                <div className="card-body">
                    <h3  className="section-heading">Beyond Healthcare</h3>
                    <div className="form-group">
                        <label htmlFor="meetTitle" className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            {...register("template_data.beyondHealthcare.title")}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">Description</label>
                        <TinyMCEEditorField 
                            name="template_data.beyondHealthcare.description" 
                            editorId={'beyond_healthcare_description'}
                            register={register}
                            setValue={setValue} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">Slider</label>
                        <SliderWithImage name="template_data.beyondHealthcare.slider" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BeyondHealthcareSection