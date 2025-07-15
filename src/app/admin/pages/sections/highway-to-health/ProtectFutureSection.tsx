import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import CTAButtonField from "../components/CTAButtonField";
import TinyMCEEditorField from "@/app/admin/common/TinyMCEEditorField";

const ProtectFutureSection = () =>{
    const { register, formState: { errors }, getValues, watch, setValue } = useFormContext();
    return(
        <div>
            <div className="card mb-3">
                <div className="card-body">
                    <h3  className="section-heading">Protect Future</h3>
                    <div className="form-group">
                        <label htmlFor="meetTitle" className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Hero Title"
                            {...register("template_data.protectFuture.title")}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">Top Right Description</label>
                        <TinyMCEEditorField 
                            name="template_data.protectFuture.topDescription" 
                            editorId={'protectFuture_topDescription'}
                            register={register}
                            setValue={setValue} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">Description</label>
                        <TinyMCEEditorField 
                            name="template_data.protectFuture.description" 
                            editorId={'protectFuture_description'}
                            register={register}
                            setValue={setValue} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">CTA Button 1</label>
                        <CTAButtonField name="template_data.protectFuture.ctaButton1"></CTAButtonField>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">CTA Button 2</label>
                        <CTAButtonField name="template_data.protectFuture.ctaButton2"></CTAButtonField>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProtectFutureSection