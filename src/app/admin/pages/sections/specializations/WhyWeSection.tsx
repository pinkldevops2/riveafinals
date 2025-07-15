import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import OurCentersSlider from "./OurCentersSlider";
import TinyMCEEditorField from "@/app/admin/common/TinyMCEEditorField";

const WhyWeSection = () =>{
    const { register, formState: { errors }, getValues, watch, setValue } = useFormContext();

    return(
        <div>
            <div className="card mb-3">
                <div className="card-body">
                    <h3  className="section-heading">Why We Created</h3>
                    <div className="form-group">
                        <label htmlFor="meetTitle" className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            {...register("template_data.whyWe.title")}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="meetTitle" className="form-label">Description Top</label>
                        <TinyMCEEditorField 
                            name="template_data.whyWe.description" 
                            editorId={'whyWe_description'}
                            register={register}
                            setValue={setValue} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="meetTitle" className="form-label">Description Bottom</label>
                        <TinyMCEEditorField 
                            name="template_data.whyWe.descriptionBottom" 
                            editorId={'whyWe_descriptionBottom'}
                            register={register}
                            setValue={setValue} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Items</label>
                        <OurCentersSlider name="template_data.whyWe.sliderItems" />
                    </div>

                   
                </div>
            </div>
        </div>
    )
}

export default WhyWeSection