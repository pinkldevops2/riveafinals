import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import TinyMCEEditorField from "@/app/admin/common/TinyMCEEditorField";

const YourHealthSection = () =>{
    const { register, formState: { errors }, getValues, watch, setValue } = useFormContext();

    return(
        <div>
            <div className="card mb-3">
                <div className="card-body">
                    <h3  className="section-heading">Your Health</h3>
                    <div className="form-group">
                        <label htmlFor="meetTitle" className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            {...register("template_data.yourHealth.title")}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="meetTitle" className="form-label">Description *</label>
                        <TinyMCEEditorField 
                            name="template_data.yourHealth.description" 
                            editorId={'yourHealth_description'}
                            register={register}
                            setValue={setValue} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YourHealthSection