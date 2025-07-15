import React, { useState, useEffect } from "react";
import TinyMCEEditor from '@/app/admin/common/TinyMCEEditor';
import { useFormContext } from "react-hook-form";
import ImageUploadField from "../components/ImageUploadField";
import VideoUploadField from "../components/VideoUploadField";
import TinyMCEEditorField from "@/app/admin/common/TinyMCEEditorField";
const uploadsUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const FaqHeroSection = () =>{
    const { register, formState: { errors }, getValues, watch, setValue } = useFormContext();

    return(
        <div>
            <div className="card mb-3">
                <div className="card-body">
                    <h3  className="section-heading">Hero Section</h3>
                    <div className="form-group">
                        <label className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Hero Title"
                            {...register("template_data.hero.title")}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">Description</label>
                        <TinyMCEEditorField 
                            name="template_data.hero.description" 
                            editorId={'faq_hero_description'}
                            register={register}
                            setValue={setValue} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">Image</label>
                        <ImageUploadField name="template_data.hero.image" ></ImageUploadField>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaqHeroSection