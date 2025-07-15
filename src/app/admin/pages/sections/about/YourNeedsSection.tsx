import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import YourNeedsAccordion from "./YourNeedsAccordion";
import TinyMCEEditorField from "@/app/admin/common/TinyMCEEditorField";
const uploadsUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const YourNeedsSection = () =>{
    const { register, formState: { errors }, getValues, watch, setValue } = useFormContext();

    return(
        <div>
            <div className="card mb-3">
                <div className="card-body">
                    <h3  className="section-heading">Your Needs</h3>
                    <div className="form-group">
                        <label htmlFor="meetTitle" className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            {...register("template_data.yourNeeds.title")}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">Description</label>
                        <TinyMCEEditorField 
                        name="template_data.yourNeeds.description" 
                        editorId={'yourNeeds_description'}
                        register={register}
                        setValue={setValue} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">Accordion Items</label>
                        <YourNeedsAccordion name="template_data.yourNeeds.slider" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YourNeedsSection;