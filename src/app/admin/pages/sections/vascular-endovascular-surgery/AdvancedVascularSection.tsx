import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import AdvancedVascularSectionAccordionTabs from "./AdvancedVascularSectionAccordionTabs";

const AdvancedVascularSection = () =>{
    const { register, formState: { errors }, getValues, watch } = useFormContext();

    return(
        <div>
            <div className="card mb-3">
                <div className="card-body">
                    <h3  className="section-heading">Advanced Vascular</h3>
                    <div className="form-group">
                        <label htmlFor="meetTitle" className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            {...register("template_data.advancedVascular.title")}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">Accordion Items</label>
                        <AdvancedVascularSectionAccordionTabs name="template_data.advancedVascular.accordion" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdvancedVascularSection