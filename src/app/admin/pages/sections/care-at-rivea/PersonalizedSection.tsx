import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import PersonalizedSectionItems from "./PersonalizedSectionItems";
import TinyMCEEditorField from "@/app/admin/common/TinyMCEEditorField";

const PersonalizedSection = () =>{
    const { register, formState: { errors }, getValues, watch, setValue } = useFormContext();

    return(
        <div>
            <div className="card mb-3">
                <div className="card-body">
                    <h3  className="section-heading">Personalized Consultations</h3>
                    <div className="form-group">
                        <label htmlFor="meetTitle" className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            {...register("template_data.personalized.title")}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="meetTitle" className="form-label">Description *</label>
                        <TinyMCEEditorField 
                            name="template_data.personalized.description" 
                            editorId={'personalized_description'}
                            register={register}
                            setValue={setValue} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Items</label>
                        <PersonalizedSectionItems name="template_data.personalized.sliderItems" />
                    </div>

                   
                </div>
            </div>
        </div>
    )
}

export default PersonalizedSection