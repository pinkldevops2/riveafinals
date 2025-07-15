import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import SliderLedby from "./SliderLedby";
import TinyMCEEditorField from "@/app/admin/common/TinyMCEEditorField";
const uploadsUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const LedBySection = () =>{
    const { register, formState: { errors }, getValues, watch, setValue } = useFormContext();

    return(
        <div>
            <div className="card mb-3">
                <div className="card-body">
                    <h3  className="section-heading">Led By</h3>
                    <div className="form-group">
                        <label htmlFor="meetTitle" className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            {...register("template_data.ledBy.title")}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="meetTitle" className="form-label">First Tab Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            {...register("template_data.ledBy.tab1Title")}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">First Tab Description</label>
                        <TinyMCEEditorField 
                            name="template_data.ledBy.tab1Description" 
                            editorId={'ledBy_tab_first_description'}
                            register={register}
                            setValue={setValue} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">First Tab Slider</label>
                        <SliderLedby name="template_data.ledBy.sliderTab1" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="meetTitle" className="form-label">Second Tab Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            {...register("template_data.ledBy.tab2Title")}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">Second Tab Description</label>
                        <TinyMCEEditorField 
                            name="template_data.ledBy.tab2Description" 
                            editorId={'ledBy_tab_second_description'}
                            register={register}
                            setValue={setValue} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">Second Tab Slider</label>
                        <SliderLedby name="template_data.ledBy.sliderTab2" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LedBySection