import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import TinyMCEEditorField from "@/app/admin/common/TinyMCEEditorField";

const TakeChargeSection = () =>{
    const { register, formState: { errors }, getValues, watch, setValue } = useFormContext();

    return(
        <div>
            <div className="card mb-3">
                <div className="card-body">
                    <h3  className="section-heading">Take Charge</h3>
                    <div className="form-group">
                        <label className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            {...register("template_data.takeCharge.title")}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Description</label>
                        <TinyMCEEditorField 
                            name="template_data.takeCharge.description" 
                            editorId={'takeCharge_description'}
                            register={register}
                            setValue={setValue} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TakeChargeSection