import React, { useState, useEffect } from "react";
import TinyMCEEditor from '@/app/admin/common/TinyMCEEditor';
import { useForm, FormProvider } from "react-hook-form";
import { toast } from "react-toastify";
import HomeTemplate from "./templates/HomeTemplate";
import { createPage } from "@/utils/pages";
import { useRouter } from "next/navigation";
import AboutTemplate from "./templates/AboutTemplate";
import SpecializationsTemplate from "./templates/SpecializationsTemplate";
import CareAtRiveaTemplate from "./templates/CareAtRiveaTemplate";
import ContactUsTemplate from "./templates/ContactUsTemplate";
import ConditionsWeTreatTemplate from "./templates/ConditionsWeTreatTemplate";
import InterventionalRadiologyTemplate from "./templates/InterventionalRadiologyTemplate";
import VascularEndovascularSurgeryTemplate from "./templates/VascularEndovascularSurgeryTemplate";
import HighwayToHealthTemplate from "./templates/HighwayToHealthTemplate";
import TinyMCEEditorField from "../common/TinyMCEEditorField";
import ThankYouTemplate from "./templates/ThankYouTemplate";
import FaqTemplate from "./templates/FaqTemplate";

interface PageFormProps {
    initialData?: Partial<any>
    onSubmit: (data: Partial<any>) => void
    isSubmitting: boolean
}

const PageForm: React.FC<PageFormProps> = ({ initialData, onSubmit, isSubmitting }) => {
    const router = useRouter();
    const methods = useForm({
        defaultValues: {
        page_template: '',
        template_data: {
        },
        title: '',
        slug: '',
        content: '',
        metaTitle: '',
        metaDescription: '',
        isActive: true,
        isHomePage: false,
        isFooterAnimationTemplate: false,
        order: 0,
        ...initialData
    }});
    const watchPageTemplate = methods.watch("page_template");
   
    return(
        <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
            
            <div className="form-group">
                <label htmlFor="page_template" className="form-label">Page Template</label>
                <select disabled={initialData && (initialData._id !== '' || initialData._id !== null) ? true : false } className={"my-select selectpicker form-select disabled"} {...methods.register("page_template")}>
                    <option value={''}>Default</option>
                    <option value={'home'}>Home</option>
                    <option value={'about'}>About Us</option>
                    <option value={'specializations'}>Specializations</option>
                    <option value={'care-at-rivea'}>Care at RIVEA</option>
                    <option value={'contact-us'}>Contact Us</option>
                    <option value={'conditions-we-treat'}>Conditions We Treat</option>
                    <option value={'interventional-radiology'}>Interventional Radiology</option>
                    <option value={'vascular-endovascular-surgery'}>Vascular & Endovascular Surgery</option>
                    <option value={'highway-to-health'}>Highway to Health</option>
                    <option value={'thank-you'}>Thank You</option>
                    <option value={'faq'}>FAQ</option>
                </select>
            </div>
            <div className="card mb-3">
                <div className="card-body">
                    <h3 className="section-heading">General Information</h3>
                    <div className="form-group">
                        <label htmlFor="title" className="form-label">Title *</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            {...methods.register("title", { required: "Title is required." })}
                        />
                        {methods.formState.errors.title && <p className="text-red-500">{methods.formState.errors.title?.message?.toString()}</p>}
                    </div>
                    {methods.getValues('slug') !== '' && (
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">Slug *</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Slug"
                            {...methods.register("slug", { required: "Slug is required." })}
                        />
                        {methods.formState.errors.slug && <p className="text-red-500">{methods.formState.errors.slug?.message?.toString()}</p>}
                    </div>
                    )}
                    {/* <div className="mb-3">
                        <label htmlFor="content" className="form-label">Content *</label>
                        <TinyMCEEditor value={methods.getValues('content')} onChange={setContent} />
                    </div> */}
                </div>
            </div>
            {watchPageTemplate == 'home' && (
                <HomeTemplate />
                ) 
            }
            {watchPageTemplate == 'about' && (
                <AboutTemplate />
                ) 
            }
            {watchPageTemplate == 'specializations' && (
                <SpecializationsTemplate />
                ) 
            }
            {watchPageTemplate == 'care-at-rivea' && (
                <CareAtRiveaTemplate />
                ) 
            }
            {watchPageTemplate == 'contact-us' && (
                <ContactUsTemplate />
                ) 
            }
            {watchPageTemplate == 'conditions-we-treat' && (
                <ConditionsWeTreatTemplate />
                ) 
            }
            {watchPageTemplate == 'interventional-radiology' && (
                <InterventionalRadiologyTemplate />
                ) 
            }
            {watchPageTemplate == 'vascular-endovascular-surgery' && (
                <VascularEndovascularSurgeryTemplate />
                ) 
            }
            {watchPageTemplate == 'highway-to-health' && (
                <HighwayToHealthTemplate />
                ) 
            }
            {watchPageTemplate == 'thank-you' && (
                <ThankYouTemplate />
                ) 
            }
            {watchPageTemplate == 'faq' && (
                <FaqTemplate />
                ) 
            }
            {watchPageTemplate == '' && (
                <div className="card mb-3">
                    <div className="card-body">
                        <div className="mb-3">
                            <label htmlFor="content" className="form-label">Content *</label>
                            <TinyMCEEditorField 
                                                        name="content" 
                                                        editorId={'main_content'}
                                                        register={methods.register}
                                                        setValue={methods.setValue} />
                        </div>
                    </div>
                </div>
                ) 
            }
            <div className="card mb-3">
                <div className="card-body">
                    <h3  className="section-heading">Seo</h3>
                    <div className="row mb-3">
                        <div className="col-md-12">
                            <label htmlFor="metaTitle" className="form-label">Meta Title *</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Meta Title"
                                {...methods.register("metaTitle", { required: "Meta Title is required." })}
                            />
                        {methods.formState.errors.metaTitle && <p className="text-red-500">{methods.formState.errors.metaTitle?.message?.toString()}</p>}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-12">
                            <label htmlFor="metaDescription" className="form-label">Meta Description *</label>
                            <textarea
                                className="form-control"
                                placeholder="Meta Description"
                                {...methods.register("metaDescription", { required: "Meta Description is required." })}
                            />
                            {methods.formState.errors.metaDescription && <p className="text-red-500">{methods.formState.errors.metaDescription?.message?.toString()}</p>}
                        </div>
                    </div>
                    <div className="mb-3 form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            {...methods.register("isActive")}
                        />
                        <label className="form-check-label" htmlFor="isActive">Active (visible on the site)</label>     
                    </div>

                    <div className="mb-3 form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            {...methods.register("isHomePage")}
                        />
                        <label className="form-check-label" htmlFor="isHomePage">Set as Home Page</label>  
                    </div>
                    {/* <div className="mb-3 form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            {...methods.register("isFooterAnimationTemplate")}
                        />
                        <label className="form-check-label" htmlFor="isFooterAnimationTemplate">Has Footer Animation Template?</label>  
                    </div> */}
                </div>
            </div>
            {/* <pre>{JSON.stringify(methods.watch(), null, 2)}</pre> */}
            <div className="mb-3">
                <button 
                  type="submit"
                  className="btn btn-primary me-2"
                  disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Saving...
                        </>
                    ) : (
                        'Save Page'
                    )} 
                </button> 
                <a href="/admin/pages" className="btn btn-outline-secondary">
                   Cancel
                </a> 
            </div>
        </form>
        </FormProvider>
    )
}

export default PageForm