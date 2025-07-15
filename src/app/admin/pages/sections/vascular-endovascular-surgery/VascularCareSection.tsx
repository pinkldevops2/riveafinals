import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import VascularCareSectionAccordion from "./VascularCareSectionAccordion";

const VascularCareSection = () =>{
    const { register, formState: { errors }, getValues, watch } = useFormContext();

    return(
        <div>
            <div className="card mb-3">
                <div className="card-body">
                    <h3  className="section-heading">Vascular Care</h3>
                    <div className="form-group">
                        <label htmlFor="meetTitle" className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            {...register("template_data.vascularCare.title")}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Items</label>
                        <VascularCareSectionAccordion name="template_data.vascularCare.accordionItems" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VascularCareSection