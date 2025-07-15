import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import OurCentersSlider from "./OurCentersSlider";
import CTAButtonField from "../components/CTAButtonField";
import TinyMCEEditorField from "@/app/admin/common/TinyMCEEditorField";

const OurCentersSection = () =>{
    const { register, formState: { errors }, getValues, watch, setValue } = useFormContext();

    return(
        <div>
            <div className="card mb-3">
                <div className="card-body">
                    <h3  className="section-heading">Our Centers</h3>
                    <div className="form-group">
                        <label htmlFor="meetTitle" className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            {...register("template_data.ourCenters.title")}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="meetTitle" className="form-label">Description</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            {...register("template_data.ourCenters.description")}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="meetTitle" className="form-label">First Tab Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            {...register("template_data.ourCenters.tab1Title")}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">First Tab Description</label>
                        <TinyMCEEditorField 
                            name="template_data.ourCenters.tab1Description" 
                            editorId={'ourCenters_tab1Description'}
                            register={register}
                            setValue={setValue} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">First Tab CTA Button</label>
                        <CTAButtonField name="template_data.ourCenters.ctaButton" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">First Tab Slider</label>
                        <OurCentersSlider name="template_data.ourCenters.sliderTab1" />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Second Tab Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            {...register("template_data.ourCenters.tab2Title")}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Second Tab Left Description</label>
                        <TinyMCEEditorField 
                            name="template_data.ourCenters.tab2Description" 
                            editorId={'ourCenters_tab2Description'}
                            register={register}
                            setValue={setValue} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Second Tab Right Description</label>
                        <TinyMCEEditorField 
                            name="template_data.ourCenters.tab2DescriptionRight" 
                            editorId={'ourCenters_tab2DescriptionRight'}
                            register={register}
                            setValue={setValue} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Second Tab Slider</label>
                        <OurCentersSlider name="template_data.ourCenters.sliderTab2" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Second Tab CTA Button</label>
                        <CTAButtonField name="template_data.ourCenters.ctaButton2" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurCentersSection