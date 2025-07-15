import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import ImageUploadField from "../components/ImageUploadField";
import CTAButtonField from "../components/CTAButtonField";
import TinyMCEEditorField from "@/app/admin/common/TinyMCEEditorField";
const uploadsUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const HomeFromComplexitySection = () =>{
    const { register, formState: { errors }, getValues, watch, setValue } = useFormContext();

    return(
        <div>
            <div className="card mb-3">
                <div className="card-body">
                    <h3  className="section-heading">From Complexity</h3>
                    <div className="form-group">
                        <label htmlFor="meetTitle" className="form-label">Top Heading</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Heading"
                            {...register("template_data.complexity.heading")}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="meetTitle" className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            {...register("template_data.complexity.title")}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">Description</label>
                        <TinyMCEEditorField 
                            name="template_data.complexity.description" 
                            editorId={'complexity_description'}
                            register={register}
                            setValue={setValue} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">CTA Button</label>
                        <CTAButtonField name="template_data.complexity.ctaButton"></CTAButtonField>
                    </div>

                    <h4 className="section-sub-heading">Accordion First Section</h4>
                    <div className="form-group">
                        <label htmlFor="meetTitle" className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            {...register("template_data.complexity.section.first.title")}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">Description</label>
                        <TinyMCEEditorField 
                            name="template_data.complexity.section.first.description" 
                            editorId={'complexity_section_first_description'}
                            register={register}
                            setValue={setValue} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">Icon</label>
                        <ImageUploadField name="template_data.complexity.section.first.icon" ></ImageUploadField>
                    </div>

                    <h4 className="section-sub-heading">Accordion Second Section</h4>
                    <div className="form-group">
                        <label htmlFor="meetTitle" className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            {...register("template_data.complexity.section.second.title")}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">Description</label>
                        <TinyMCEEditorField 
                            name="template_data.complexity.section.second.description" 
                            editorId={'complexity_section_second_description'}
                            register={register}
                            setValue={setValue} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">Icon</label>
                        <ImageUploadField name="template_data.complexity.section.second.icon" ></ImageUploadField>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default HomeFromComplexitySection