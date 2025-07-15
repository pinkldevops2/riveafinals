import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import HighwaytoHealthSectionAccordion from "./HighwaytoHealthSectionAccordion";
import TinyMCEEditorField from "@/app/admin/common/TinyMCEEditorField";

const HighwaytoHealthSection = () =>{
    const { register, formState: { errors }, getValues, watch, setValue } = useFormContext();
    return(
        <div>
            <div className="card mb-3">
                <div className="card-body">
                    <h3  className="section-heading">Highway to Health</h3>
                    <div className="mb-3">
                            <label className="form-label">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Title"
                                {...register("template_data.highwaytoHealth.title")}
                            />
                        </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">Description</label>
                        <TinyMCEEditorField 
                            name="template_data.highwaytoHealth.description" 
                            editorId={'highwaytoHealth_description'}
                            register={register}
                            setValue={setValue} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Sub Heading</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            {...register("template_data.highwaytoHealth.subHeading")}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Items</label>
                        <HighwaytoHealthSectionAccordion name="template_data.highwaytoHealth.accordionItems" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HighwaytoHealthSection