import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import TinyMCEEditorField from "@/app/admin/common/TinyMCEEditorField";

const ConnectWithSection = () =>{
    const { register, formState: { errors }, getValues, watch, setValue } = useFormContext();

    return(
        <div>
            <div className="card mb-3">
                <div className="card-body">
                    <h3  className="section-heading">Connect With</h3>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">Description</label>
                        <TinyMCEEditorField 
                            name="template_data.connectWith.description" 
                            editorId={'connectWith_description'}
                            register={register}
                            setValue={setValue} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConnectWithSection