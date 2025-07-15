import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import CTAButtonField from "../components/CTAButtonField";
import YourQuestionsSectionFAQ from "./YourQuestionsSectionFAQ";
import TinyMCEEditorField from "@/app/admin/common/TinyMCEEditorField";

const YourQuestionsSection = () =>{
    const { register, formState: { errors }, getValues, watch, setValue } = useFormContext();

    return(
        <div>
            <div className="card mb-3">
                <div className="card-body">
                    <h3  className="section-heading">Your Questions</h3>
                    <div className="form-group">
                        <label htmlFor="meetTitle" className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            {...register("template_data.yourQuestions.title")}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Description</label>
                        <TinyMCEEditorField 
                            name="template_data.yourQuestions.description" 
                            editorId={'yourQuestions_description'}
                            register={register}
                            setValue={setValue} />
                    </div>
                    <div className="form-group">
                        <label className="form-label">CTA Button</label>
                        <CTAButtonField name="template_data.yourQuestions.ctaButton" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">FAQ Items</label>
                        <YourQuestionsSectionFAQ name="template_data.yourQuestions.faq" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YourQuestionsSection