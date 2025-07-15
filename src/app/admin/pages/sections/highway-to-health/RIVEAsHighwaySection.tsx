import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import RIVEAsHighwaySectionAccordion from "./RIVEAsHighwaySectionAccordion";
import TinyMCEEditorField from "@/app/admin/common/TinyMCEEditorField";

const RIVEAsHighwaySection = () =>{
    const { register, formState: { errors }, getValues, watch, setValue } = useFormContext();
    return(
        <div>
            <div className="card mb-3">
                <div className="card-body">
                    <h3  className="section-heading">RIVEA’s Highway</h3>
                    <div className="mb-3">
                            <label className="form-label">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Title"
                                {...register("template_data.riveasHighway.title")}
                            />
                        </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">Description</label>
                        <TinyMCEEditorField 
                            name="template_data.riveasHighway.description" 
                            editorId={'riveasHighway_description'}
                            register={register}
                            setValue={setValue} />
                    </div>
                    <div className="mb-3">
                            <label className="form-label">Sub Title</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Title"
                                {...register("template_data.riveasHighway.subTitle")}
                            />
                        </div>
                    <div className="form-group">
                        <label className="form-label">Items</label>
                        <RIVEAsHighwaySectionAccordion name="template_data.riveasHighway.accordionItems" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RIVEAsHighwaySection