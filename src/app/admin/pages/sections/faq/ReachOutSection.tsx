import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import CTAButtonField from "../components/CTAButtonField";
import TinyMCEEditorField from "@/app/admin/common/TinyMCEEditorField";

const ReachOutSection = () =>{
    const { register, formState: { errors }, getValues, watch, setValue} = useFormContext();
    return(
        <div>
            <div className="card mb-3">
                <div className="card-body">
                    <h3  className="section-heading">Reach Out</h3>
                    <div className="form-group">
                        <label htmlFor="meetTitle" className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            {...register("template_data.reachOut.title")}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">Mail To Button</label>
                        <CTAButtonField name="template_data.reachOut.ctaButton"></CTAButtonField>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReachOutSection