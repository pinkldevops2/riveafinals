import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import TinyMCEEditorField from "@/app/admin/common/TinyMCEEditorField";

const YourHealthSection = () =>{
    const { register, formState: { errors }, getValues, watch, setValue } = useFormContext();

    return(
        <div>
            <div className="card mb-3">
                <div className="card-body">
                    <h3  className="section-heading">Get Clarity</h3>
                    <div className="form-group">
                        <label className="form-label">Description *</label>
                        <TinyMCEEditorField 
                            name="template_data.yourHelth.description" 
                            editorId={'yourHelth_description'}
                            register={register}
                            setValue={setValue} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YourHealthSection