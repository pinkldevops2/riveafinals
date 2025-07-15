import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import VascularDiseaseSectionAccordion from "./VascularDiseaseSectionAccordion";
import TinyMCEEditorField from "@/app/admin/common/TinyMCEEditorField";

const VascularDiseaseSection = () =>{
    const { register, formState: { errors }, getValues, watch, setValue } = useFormContext();
    return(
        <div>
            <div className="card mb-3">
                <div className="card-body">
                    <h3  className="section-heading">Vascular Disease</h3>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            {...register("template_data.vascularDisease.title")}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">Description</label>
                        <TinyMCEEditorField 
                            name="template_data.vascularDisease.description" 
                            editorId={'vascularDisease_description'}
                            register={register}
                            setValue={setValue} />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Items</label>
                        <VascularDiseaseSectionAccordion name="template_data.vascularDisease.accordionItems" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VascularDiseaseSection