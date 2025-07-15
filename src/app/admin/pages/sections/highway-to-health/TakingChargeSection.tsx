import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import TakingChargeSectionAccordion from "./TakingChargeSectionAccordion";
import TinyMCEEditorField from "@/app/admin/common/TinyMCEEditorField";

const TakingChargeSection = () =>{
    const { register, formState: { errors }, getValues, watch, setValue } = useFormContext();
    return(
        <div>
            <div className="card mb-3">
                <div className="card-body">
                    <h3  className="section-heading">Taking Charge</h3>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            {...register("template_data.takingCharge.title")}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">Description</label>
                        <TinyMCEEditorField 
                            name="template_data.takingCharge.description" 
                            editorId={'takingCharge_description'}
                            register={register}
                            setValue={setValue} />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Items</label>
                        <TakingChargeSectionAccordion name="template_data.takingCharge.accordionItems" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TakingChargeSection