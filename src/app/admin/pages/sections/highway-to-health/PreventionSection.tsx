import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import ImageUploadField from "../components/ImageUploadField";
import TinyMCEEditorField from "@/app/admin/common/TinyMCEEditorField";

const PreventionSection = () =>{
    const { register, formState: { errors }, getValues, watch, setValue } = useFormContext();
    return(
        <div>
            <div className="card mb-3">
                <div className="card-body">
                    <h3  className="section-heading">Prevention</h3>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">Description</label>
                        <TinyMCEEditorField 
                            name="template_data.prevention.description" 
                            editorId={'prevention_description'}
                            register={register}
                            setValue={setValue} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">Background Image</label>
                        <ImageUploadField name="template_data.prevention.background_image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PreventionSection