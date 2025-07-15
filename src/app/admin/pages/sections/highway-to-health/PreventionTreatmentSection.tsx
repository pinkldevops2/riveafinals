import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import PreventionTreatmentSectionAccordion from "./PreventionTreatmentSectionAccordion";
import TinyMCEEditorField from "@/app/admin/common/TinyMCEEditorField";

const PreventionTreatmentSection = () =>{
    const { register, formState: { errors }, getValues, watch, setValue } = useFormContext();
    return(
        <div>
            <div className="card mb-3">
                <div className="card-body">
                    <h3  className="section-heading">Prevention & Treatment</h3>
                    <div className="mb-3">
                            <label className="form-label">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Title"
                                {...register("template_data.preventionTreatment.title")}
                            />
                        </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">Description</label>
                        <TinyMCEEditorField 
                            name="template_data.preventionTreatment.description" 
                            editorId={'preventionTreatment_description'}
                            register={register}
                            setValue={setValue} />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Items</label>
                        <PreventionTreatmentSectionAccordion name="template_data.preventionTreatment.accordionItems" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PreventionTreatmentSection