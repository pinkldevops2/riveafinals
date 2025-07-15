import React, { useState, useEffect } from "react";

import TinyMCEEditorField from '@/app/admin/common/TinyMCEEditorField';
import { useFormContext } from "react-hook-form";
import ImageUploadField from "../components/ImageUploadField";

const AtRiveaSection = () =>{
    const { register, formState: { errors }, getValues, watch, setValue } = useFormContext();

    return(
        <div>
            <div className="card mb-3">
                <div className="card-body">
                    <h3  className="section-heading">At Rivea</h3>
                    <div className="form-group">
                        <label htmlFor="meetTitle" className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            {...register("template_data.atRivea.title")}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">Image</label>
                        <ImageUploadField name="template_data.atRivea.image" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">Description</label>
                        <TinyMCEEditorField 
                        name="template_data.atRivea.description" 
                        editorId={'atRivia1'}
                        register={register}
                        setValue={setValue} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AtRiveaSection