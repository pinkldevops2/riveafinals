import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import TinyMCEEditorField from "@/app/admin/common/TinyMCEEditorField";
import HaveQuestionsSectionAccordion from "./HaveQuestionsSectionAccordion";
import QuestionsSectionAccordion from "./QuestionsSectionAccordion";

const HaveQuestionsSection = () =>{
    const { register, formState: { errors }, getValues, watch, setValue } = useFormContext();
    return(
        <div>
            <div className="card mb-3">
                <div className="card-body">
                    <h3  className="section-heading">Have Questions</h3>
                    <div className="mb-3">
                            <label className="form-label">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Title"
                                {...register("template_data.haveQuestions.title")}
                            />
                        </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">Description</label>
                        <TinyMCEEditorField 
                            name="template_data.haveQuestions.description" 
                            editorId={'haveQuestions_description'}
                            register={register}
                            setValue={setValue} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">Bottom Description</label>
                        <TinyMCEEditorField 
                            name="template_data.haveQuestions.bottomDescription" 
                            editorId={'bottomDescription_description'}
                            register={register}
                            setValue={setValue} />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Items</label>
                        <HaveQuestionsSectionAccordion name="template_data.haveQuestions.accordionItems" />
                    </div>

                    <div className="form-group">
                        <h3  className="section-heading">Questions</h3>
                        <QuestionsSectionAccordion name="template_data.haveQuestions.questions" />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default HaveQuestionsSection