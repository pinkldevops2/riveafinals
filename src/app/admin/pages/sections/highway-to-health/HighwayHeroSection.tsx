import React, { useState, useEffect } from "react";
import TinyMCEEditor from '@/app/admin/common/TinyMCEEditor';
import { useFormContext } from "react-hook-form";
import ImageUploadField from "../components/ImageUploadField";
import VideoUploadField from "../components/VideoUploadField";
const uploadsUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const HighwayHeroSection = () =>{
    const { register, formState: { errors }, getValues, watch } = useFormContext();

    return(
        <div>
            <div className="card mb-3">
                <div className="card-body">
                    <h3  className="section-heading">Hero Section</h3>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">Title Image</label>
                        {/* <input type="text" className="form-control" {...register("template_data.heroLogo")}  /> */}
                        <ImageUploadField name="template_data.hero.titleImage" ></ImageUploadField>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">Banner Image *</label>
                        {/* <input type="text" className="form-control" {...register("template_data.heroLogo")}  /> */}
                        <ImageUploadField name="template_data.hero.image" ></ImageUploadField>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HighwayHeroSection