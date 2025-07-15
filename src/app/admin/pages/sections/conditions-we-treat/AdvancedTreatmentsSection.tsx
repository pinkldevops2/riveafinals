import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import AdvancedTreatmentsSectionAccordionItem from "./AdvancedTreatmentsSectionAccordionItem";
import AdvancedTreatmentsSectionAccordionTabs from "./AdvancedTreatmentsSectionAccordionTabs";
import TinyMCEEditorField from "@/app/admin/common/TinyMCEEditorField";

const AdvancedTreatmentsSection = () =>{
    const { register, formState: { errors }, getValues, watch, setValue } = useFormContext();

    return(
        <div>
            <div className="card mb-3">
                <div className="card-body">
                    <h3  className="section-heading">Advanced Treatments</h3>
                    <div className="form-group">
                        <label className="form-label">Top Description *</label>
                        <TinyMCEEditorField 
                            name="template_data.advancedTreatments.description" 
                            editorId={'advancedTreatments_description'}
                            register={register}
                            setValue={setValue} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="meetTitle" className="form-label">First Tab Text *</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            {...register("template_data.advancedTreatments.tab1Title")}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="meetTitle" className="form-label">First Tab Heading *</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            {...register("template_data.advancedTreatments.tab1Heading")}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">First Tab Slider</label>
                        <AdvancedTreatmentsSectionAccordionItem name="template_data.advancedTreatments.accordionTab1" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="meetTitle" className="form-label">Second Tab Text *</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            {...register("template_data.advancedTreatments.tab2Title")}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="meetTitle" className="form-label">Second Tab Heading *</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            {...register("template_data.advancedTreatments.tab2Heading")}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">Second Tab Slider</label>
                        <AdvancedTreatmentsSectionAccordionTabs name="template_data.advancedTreatments.accordionTab2" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdvancedTreatmentsSection