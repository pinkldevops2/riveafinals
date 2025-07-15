import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import ImageUploadField from "../components/ImageUploadField";
import TinyMCEEditorField from "@/app/admin/common/TinyMCEEditorField";

const HomeUnderstandingYouSection = () =>{
    const { register, formState: { errors }, getValues, watch, setValue } = useFormContext();
    
    return(
        <div>
            <div className="card mb-3">
                <div className="card-body">
                    <h3  className="section-heading">Understanding You</h3>
                    <div className="form-group">
                        <label htmlFor="meetTitle" className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            {...register("template_data.understanding.title")}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">Banner</label>
                        <ImageUploadField name="template_data.understanding.banner" ></ImageUploadField>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">Description</label>
                        <TinyMCEEditorField 
                            name="template_data.understanding.description" 
                            editorId={'understanding_description'}
                            register={register}
                            setValue={setValue} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeUnderstandingYouSection