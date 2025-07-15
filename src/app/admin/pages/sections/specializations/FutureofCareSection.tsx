import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import ImageUploadField from "../components/ImageUploadField";
import FutureofCareSectionSlider from "./FutureofCareSectionSlider";

const FutureofCareSection = () =>{
    const { register, formState: { errors }, getValues, watch } = useFormContext();

    return(
        <div>
            <div className="card mb-3">
                <div className="card-body">
                    <h3  className="section-heading">Future of Care</h3>
                    <div className="form-group">
                        <label htmlFor="meetTitle" className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            {...register("template_data.futureCate.title")}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">Description</label>
                        <textarea className='form-control' {...register("template_data.futureCate.description")} placeholder="Description" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">Banner</label>
                        <ImageUploadField name="template_data.futureCate.banner"></ImageUploadField>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">Slider</label>
                        <FutureofCareSectionSlider name="template_data.futureCate.slider"></FutureofCareSectionSlider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FutureofCareSection