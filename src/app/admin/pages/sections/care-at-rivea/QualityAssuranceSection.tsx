import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import ImageUploadField from "../components/ImageUploadField";

const QualityAssuranceSection = () =>{
    const { register, formState: { errors }, getValues, watch } = useFormContext();

    return(
        <div>
            <div className="card mb-3">
                <div className="card-body">
                    <h3  className="section-heading">Quality Assurance</h3>
                    <div className="form-group">
                        <label className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            {...register("template_data.qualityAssurance.title")}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Description</label>
                        <textarea className='form-control' {...register('template_data.qualityAssurance.description')} placeholder="Description" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Background Image</label>
                        <ImageUploadField name="template_data.qualityAssurance.background_image" />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Top Message</label>
                        <textarea className='form-control' {...register('template_data.qualityAssurance.topMessage')} placeholder="Top Message" />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Right Message</label>
                        <textarea className='form-control' {...register('template_data.qualityAssurance.rightMessage')} placeholder="Right Message" />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Bottom Message</label>
                        <textarea className='form-control' {...register('template_data.qualityAssurance.bottomMessage')} placeholder="Bottom Message" />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default QualityAssuranceSection