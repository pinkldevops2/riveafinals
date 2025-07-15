import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import TinyMCEEditorField from "@/app/admin/common/TinyMCEEditorField";
import ImageUploadField from "../components/ImageUploadField";

const AtRiveaSectionSpec = () =>{
    const { register, formState: { errors }, getValues, watch, setValue } = useFormContext();

    return(
        <div>
            <div className="card mb-3">
                <div className="card-body">
                    <h3  className="section-heading">At Rivea</h3>
                    <div className="form-group">
                        <label className="form-label">Banner</label>
                        <ImageUploadField name="template_data.atRivea.banner"></ImageUploadField>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <TinyMCEEditorField 
                            name="template_data.atRivea.description" 
                            editorId={'atRivea_description_new'}
                            register={register}
                            setValue={setValue} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AtRiveaSectionSpec