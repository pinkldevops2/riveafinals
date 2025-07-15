import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import TinyMCEEditorField from "@/app/admin/common/TinyMCEEditorField";
const uploadsUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const StatementsSection = () =>{
    const { register, formState: { errors }, getValues, watch, setValue } = useFormContext();

    return(
        <div>
            <div className="card mb-3">
                <div className="card-body">
                    <h3  className="section-heading">Statements</h3>
                    <div className="form-group">
                        <label htmlFor="meetTitle" className="form-label">Left Title </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            {...register("template_data.statements.title")}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">Left Description</label>
                        <TinyMCEEditorField 
                            name="template_data.statements.description" 
                            editorId={'statements_description'}
                            register={register}
                            setValue={setValue} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="meetTitle" className="form-label">Right Title </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            {...register("template_data.statements.rightTitle")}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">Right Description</label>
                        <TinyMCEEditorField 
                            name="template_data.statements.rightDescription" 
                            editorId={'statements_rightDescription'}
                            register={register}
                            setValue={setValue} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default StatementsSection