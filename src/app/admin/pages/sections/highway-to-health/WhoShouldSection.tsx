import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import TinyMCEEditorField from "@/app/admin/common/TinyMCEEditorField";

const WhoShouldSection = () =>{
    const { register, formState: { errors }, getValues, watch, setValue } = useFormContext();
    return(
        <div>
            <div className="card mb-3">
                <div className="card-body">
                    <h3  className="section-heading">Who Should</h3>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            {...register("template_data.whoShould.title")}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">Description</label>
                        <TinyMCEEditorField 
                            name="template_data.whoShould.description" 
                            editorId={'whoShould_description'}
                            register={register}
                            setValue={setValue} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Top Question</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            {...register("template_data.whoShould.topQuestion")}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Top Right Question</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            {...register("template_data.whoShould.topRightQuestion")}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Middle Question</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            {...register("template_data.whoShould.middleQuestion")}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Bottom Left Question</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            {...register("template_data.whoShould.bottomQuestion")}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Bottom Right Question</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            {...register("template_data.whoShould.bottomRightQuestion")}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhoShouldSection;