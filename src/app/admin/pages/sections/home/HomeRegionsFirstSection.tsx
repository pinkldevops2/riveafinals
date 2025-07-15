import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import ImageUploadField from "../components/ImageUploadField";
import TinyMCEEditorField from "@/app/admin/common/TinyMCEEditorField";

const HomeRegionsFirstSection = () =>{
    const { register, formState: { errors }, getValues, watch, setValue } = useFormContext();

    return(
        <div>
            <div className="card mb-3">
                <div className="card-body">
                    <h3  className="section-heading">Regions First</h3>
                    <div className="form-group">
                        <label htmlFor="meetTitle" className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            {...register("template_data.region_first.title")}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">Banner</label>
                        <ImageUploadField name="template_data.region_first.banner" ></ImageUploadField>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">Description</label>
                        <TinyMCEEditorField 
                            name="template_data.region_first.description" 
                            editorId={'region_first_description'}
                            register={register}
                            setValue={setValue} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeRegionsFirstSection