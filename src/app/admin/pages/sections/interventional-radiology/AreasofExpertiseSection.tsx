import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import AreasofExpertiseSectionAccordion from "./AreasofExpertiseSectionAccordion";
import TinyMCEEditorField from "@/app/admin/common/TinyMCEEditorField";

const AreasofExpertiseSection = () =>{
    const { register, formState: { errors }, getValues, watch, setValue } = useFormContext();

    return(
        <div>
            <div className="card mb-3">
                <div className="card-body">
                    <h3  className="section-heading">Areas of Expertise</h3>
                    <div className="form-group">
                        <label htmlFor="meetTitle" className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            {...register("template_data.areasofExpertise.title")}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Bottom Description</label>
                        <TinyMCEEditorField 
                            name="template_data.areasofExpertise.description" 
                            editorId={'areasofExpertise_description'}
                            register={register}
                            setValue={setValue} />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Box Items</label>
                        <AreasofExpertiseSectionAccordion name="template_data.areasofExpertise.accordion" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AreasofExpertiseSection