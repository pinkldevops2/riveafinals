import React, { useState, useEffect } from "react";
import TinyMCEEditor from '@/app/admin/common/TinyMCEEditor';
import { useFormContext } from "react-hook-form";
import ImageUploadField from "@/app/admin/pages/sections/components/ImageUploadField";
import CTAButtonField from "@/app/admin/pages/sections/components/CTAButtonField";
const uploadsUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const GeneralFormSection = () =>{
    const { register, formState: { errors }, getValues, watch } = useFormContext();

    return(
        <div>
            <div className="card mb-3">
                <div className="card-body">
                    <div className="form-group">
                        <label htmlFor="title" className="form-label">Header Logo</label>
                        <ImageUploadField name="settingData.headerLogo" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="title" className="form-label">Footer Logo</label>
                        <ImageUploadField name="settingData.footerLogo" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="title" className="form-label">Copyright Text</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Copyright Text"
                            {...register("settingData.copyright")}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="title" className="form-label">Facebook</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Facebook"
                            {...register("settingData.facebook")}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="title" className="form-label">Instagram</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Instagram"
                            {...register("settingData.instagram")}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="title" className="form-label">Youtube</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Youtube"
                            {...register("settingData.youtube")}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="title" className="form-label">Need More Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            {...register("settingData.needTtitle")}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">CTA Button</label>
                        <CTAButtonField name="settingData.needButton" />
                    </div>
                    </div>
                </div>
            </div>
        
    )
}

export default GeneralFormSection