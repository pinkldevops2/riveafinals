import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import CTAButtonField from "../components/CTAButtonField";
import ImageUploadField from "../components/ImageUploadField";
import TinyMCEEditorField from "@/app/admin/common/TinyMCEEditorField";

const PersonalizedAttentionSection = () =>{
    const { register, formState: { errors }, getValues, watch, setValue } = useFormContext();

    return(
        <div>
            <div className="card mb-3">
                <div className="card-body">
                    <h3  className="section-heading">Personalized Attention Tab 1</h3>
                    <div className="form-group">
                        <label htmlFor="meetTitle" className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            {...register("template_data.personalizedAttention1.title")}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Description</label>
                        <TinyMCEEditorField 
                            name="template_data.personalizedAttention1.description" 
                            editorId={'personalizedAttention1_description'}
                            register={register}
                            setValue={setValue} />
                    </div>
                    <div className="form-group">
                        <label className="form-label">CTA Button</label>
                        <CTAButtonField name="template_data.personalizedAttention1.ctaButton" />
                    </div>
                    <div className="row">
                    <div className="form-group col-md-6">
                        <label htmlFor="meetTitle" className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            {...register("template_data.personalizedAttention1.doctor_name")}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="meetTitle" className="form-label">Education</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Education"
                            {...register("template_data.personalizedAttention1.doctor_education")}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="meetTitle" className="form-label">Twitter</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            {...register("template_data.personalizedAttention1.twitter")}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="meetTitle" className="form-label">Linkedin</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            {...register("template_data.personalizedAttention1.linkedin")}
                        />
                    </div>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Doctor Image</label>
                        <ImageUploadField name="template_data.personalizedAttention1.doctor_image" />
                    </div>


                    <h3  className="section-heading">Personalized Attention Tab 2</h3>
                    <div className="form-group">
                        <label htmlFor="meetTitle" className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            {...register("template_data.personalizedAttention.title")}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Description</label>
                        <TinyMCEEditorField 
                            name="template_data.personalizedAttention.description" 
                            editorId={'personalizedAttention_description'}
                            register={register}
                            setValue={setValue} />
                    </div>
                    <div className="form-group">
                        <label className="form-label">CTA Button</label>
                        <CTAButtonField name="template_data.personalizedAttention.ctaButton" />
                    </div>
                    <div className="row">
                    <div className="form-group col-md-6">
                        <label htmlFor="meetTitle" className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            {...register("template_data.personalizedAttention.doctor_name")}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="meetTitle" className="form-label">Education</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Education"
                            {...register("template_data.personalizedAttention.doctor_education")}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="meetTitle" className="form-label">Twitter</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            {...register("template_data.personalizedAttention.twitter")}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="meetTitle" className="form-label">Linkedin</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            {...register("template_data.personalizedAttention.linkedin")}
                        />
                    </div>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Doctor Image</label>
                        <ImageUploadField name="template_data.personalizedAttention.doctor_image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalizedAttentionSection