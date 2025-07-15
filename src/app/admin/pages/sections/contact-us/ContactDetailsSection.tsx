import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import TinyMCEEditorField from "@/app/admin/common/TinyMCEEditorField";
import ImageUploadField from "../components/ImageUploadField";

const ContactDetailsSection = () =>{
    const { register, formState: { errors }, getValues, watch, setValue } = useFormContext();

    return(
        <div>
            <div className="card mb-3">
                <div className="card-body">
                    <h3  className="section-heading">Contact Details</h3>
                    <div className="form-group">
                        <label className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            {...register("template_data.contactDetails.title")}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Description</label>
                        <textarea className='form-control' {...register('template_data.contactDetails.description')} placeholder="Description" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Telephone</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Telephone"
                            {...register("template_data.contactDetails.telephone")}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            {...register("template_data.contactDetails.email")}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Address *</label>
                        <textarea className='form-control' {...register('template_data.contactDetails.address')} placeholder="Address" />
                        {/* <TinyMCEEditorField 
                            name="template_data.contactDetails.address" 
                            editorId={'contactDetails_address'}
                            register={register}
                            setValue={setValue} /> */}
                    </div>
                    <div className="form-group">
                        <label className="form-label">Map Image</label>
                        <ImageUploadField name="template_data.contactDetails.map_image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactDetailsSection