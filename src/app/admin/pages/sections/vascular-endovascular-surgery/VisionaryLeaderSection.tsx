import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import CTAButtonField from "../components/CTAButtonField";
import ImageUploadField from "../components/ImageUploadField";
import VisionaryLeaderSectionAccordion from "./VisionaryLeaderSectionAccordion";
import TinyMCEEditorField from "@/app/admin/common/TinyMCEEditorField";

const VisionaryLeaderSection = () =>{
    const { register, formState: { errors }, getValues, watch, setValue } = useFormContext();

    return(
        <div>
            <div className="card mb-3">
                <div className="card-body">
                    <h3  className="section-heading">Visionary Leader</h3>
                    <div className="form-group">
                        <label className="form-label">Top Description</label>
                        <TinyMCEEditorField 
                            name="template_data.visionaryLeader.topDescription" 
                            editorId={'visionaryLeader_topDescription'}
                            register={register}
                            setValue={setValue} />
                    </div>
                    <div className="form-group">
                        <label className="form-label">First Description</label>
                        <TinyMCEEditorField 
                            name="template_data.visionaryLeader.firstdescription" 
                            editorId={'visionaryLeader_firstdescription'}
                            register={register}
                            setValue={setValue} />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Second Description</label>
                        <TinyMCEEditorField 
                            name="template_data.visionaryLeader.description" 
                            editorId={'visionaryLeader_description'}
                            register={register}
                            setValue={setValue} />
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="meetTitle" className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                {...register("template_data.visionaryLeader.doctor_name")}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="meetTitle" className="form-label">Education</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Education"
                                {...register("template_data.visionaryLeader.doctor_education")}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="meetTitle" className="form-label">Twitter</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Title"
                                {...register("template_data.visionaryLeader.twitter")}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="meetTitle" className="form-label">Linkedin</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Title"
                                {...register("template_data.visionaryLeader.linkedin")}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Doctor Image</label>
                        <ImageUploadField name="template_data.visionaryLeader.doctor_image" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Box Items</label>
                        <VisionaryLeaderSectionAccordion name="template_data.visionaryLeader.accordion" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Bottom Description</label>
                        <TinyMCEEditorField 
                            name="template_data.visionaryLeader.bottomDescription" 
                            editorId={'visionaryLeader_bottomDescription'}
                            register={register}
                            setValue={setValue} />
                    </div>
                    <div className="form-group">
                        <label className="form-label">CTA Button</label>
                        <CTAButtonField name="template_data.visionaryLeader.ctaButton" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VisionaryLeaderSection