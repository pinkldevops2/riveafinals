import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import ImageUploadField from "../components/ImageUploadField";
import TinyMCEEditorField from "@/app/admin/common/TinyMCEEditorField";

const PioneeringSection = () =>{
    const { register, formState: { errors }, getValues, watch, setValue } = useFormContext();
    return(
        <div>
            <div className="card mb-3">
                <div className="card-body">
                    <h3  className="section-heading">Pioneering</h3>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">Image</label>
                        <ImageUploadField name="template_data.pioneering.image" ></ImageUploadField>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">Description</label>
                        <TinyMCEEditorField 
                            name="template_data.pioneering.description" 
                            editorId={'pioneering_description'}
                            register={register}
                            setValue={setValue} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PioneeringSection