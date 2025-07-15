import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import CTAButtonField from "../components/CTAButtonField";
import TinyMCEEditorField from "@/app/admin/common/TinyMCEEditorField";

const ThankYouSection = () =>{
    const { register, formState: { errors }, getValues, watch, setValue } = useFormContext();

    return(
        <div>
            <div className="card mb-3">
                <div className="card-body">
                    <h3  className="section-heading">Thank You</h3>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            {...register("template_data.thankYou.title")}
                        />
                    </div>
                    <div className="form-group">
                                            <label htmlFor="meetTitle" className="form-label">Description</label>
                                            <TinyMCEEditorField 
                                                name="template_data.thankYou.description" 
                                                editorId={'thankYou_description'}
                                                register={register}
                                                setValue={setValue} />
                                        </div>
                    <div className="form-group">
                        <label className="form-label">CTA Button</label>
                        <CTAButtonField name="template_data.thankYou.ctaButton" />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ThankYouSection