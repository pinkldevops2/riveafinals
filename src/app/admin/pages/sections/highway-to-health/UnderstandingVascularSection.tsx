import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import UnderstandingVascularSectionAccordion from "./UnderstandingVascularSectionAccordion";
import TinyMCEEditorField from "@/app/admin/common/TinyMCEEditorField";

const UnderstandingVascularSection = () =>{
    const { register, formState: { errors }, getValues, watch, setValue } = useFormContext();
    return(
        <div>
            <div className="card mb-3">
                <div className="card-body">
                    <h3  className="section-heading">Understanding Vascular</h3>
                    <div className="mb-3">
                            <label className="form-label">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Title"
                                {...register("template_data.understandingVascular.title")}
                            />
                        </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">Description</label>
                        <TinyMCEEditorField 
                            name="template_data.understandingVascular.description" 
                            editorId={'understandingVascular_description'}
                            register={register}
                            setValue={setValue} />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Items</label>
                        <UnderstandingVascularSectionAccordion name="template_data.understandingVascular.accordionItems" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UnderstandingVascularSection