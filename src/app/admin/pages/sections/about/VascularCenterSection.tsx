import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import SliderWithImageTitleDescription from "../components/SliderWithImageTitleDescription";
import TinyMCEEditorField from "@/app/admin/common/TinyMCEEditorField";
const uploadsUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const VascularCenterSection = () =>{
    const { register, formState: { errors }, getValues, watch, setValue } = useFormContext();

    return(
        <div>
            <div className="card mb-3">
                <div className="card-body">
                    <h3  className="section-heading">Vascular Center</h3>
                    <div className="form-group">
                        <label htmlFor="meetTitle" className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            {...register("template_data.vascularCenter.title")}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">Description</label>
                        <TinyMCEEditorField 
                            name="template_data.vascularCenter.description" 
                            editorId={'vascularCenter_description'}
                            register={register}
                            setValue={setValue} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">Slider</label>
                        <SliderWithImageTitleDescription name="template_data.vascularCenter.slider" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VascularCenterSection