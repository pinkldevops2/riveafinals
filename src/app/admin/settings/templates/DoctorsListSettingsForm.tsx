import React, { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { toast } from "react-toastify";
import { getSettingsByType, updateSettings } from "@/utils/settings";
import { useRouter } from "next/navigation";
import TinyMCEEditorField from "../../common/TinyMCEEditorField";
import ImageUploadField from "../../pages/sections/components/ImageUploadField";
import NewsSettingsFindHereBlocks from "./sections/NewsSettingsFindHereBlocks";
import NewsSettingsLearnTogetherBlocks from "./sections/NewsSettingsLearnTogetherBlocks";
import CTAButtonField from "../../pages/sections/components/CTAButtonField";
import DoctorListSettingsExpertiseBlocks from "./sections/DoctorListSettingsExpertiseBlocks";
interface SettingsFormProps {
  initialData?: Partial<any>;
  onSubmit: (data: Partial<any>) => void
  isSubmitting: boolean
}
const DoctorsListSettingsForm: React.FC<SettingsFormProps> = ({ initialData, onSubmit, isSubmitting }) => {
    const router = useRouter();
    const [type, setType] = useState("doctors-list");
    const [setting, setSetting] = useState<any | null>(null)
    const [error, setError] = useState<string | null>(null)
    const methods = useForm({
        defaultValues: {
        type: type,
        settingData: {
            heroTitle: '',
            globalExpertiseTitle: '',
            medicineTitle: '',
            meetDoctorTitle: ''
        },
         ...initialData
    }});
    return(
        <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="card mb-3">
                <div className="card-body">
                    <h3 className="section-heading">Doctors List Settings</h3>
                    <div className="form-group">
                        <label htmlFor="title" className="form-label">Hero Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            {...methods.register("settingData.heroTitle")}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="title" className="form-label">Hero Image</label>
                        <ImageUploadField name="settingData.heroImage" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="title" className="form-label">Description</label>
                        <TinyMCEEditorField 
                        name="settingData.description" 
                        editorId={'settingData_news_description'}
                        register={methods.register}
                        setValue={methods.setValue} />
                    </div>
                    <div className="form-group mt-5">
                        <h3>Global Expertise Section</h3>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            {...methods.register("settingData.globalExpertiseTitle")}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="title" className="form-label">Description</label>
                        <TinyMCEEditorField 
                        name="settingData.globalExpertise" 
                        editorId={'settingData_globalExpertise_description'}
                        register={methods.register}
                        setValue={methods.setValue} />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Global Expertise Blocks</label>
                        <DoctorListSettingsExpertiseBlocks name="settingData.globalExpertiseBlocks" />
                    </div>

                    <h3 className="section-heading mt-5">More Than Medicine Section</h3>
                    <div className="form-group">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            {...methods.register("settingData.medicineTitle")}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="title" className="form-label">Image</label>
                        <ImageUploadField name="settingData.medicineImage" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="title" className="form-label">Description</label>
                        <TinyMCEEditorField 
                        name="settingData.medicineDescription" 
                        editorId={'settingData_medicine_description'}
                        register={methods.register}
                        setValue={methods.setValue} />
                    </div>

                    <div className="form-group  mt-5">
                        <h3>Meet Your Doctor Section</h3>
                        
                    </div>
                    <div className="form-group">
                        <label className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            {...methods.register("settingData.meetDoctorTitle")}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">CTA Button</label>
                        <CTAButtonField name="settingData.meetDoctorButton" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">CTA Button 2</label>
                        <CTAButtonField name="settingData.meetDoctorButton2" />
                    </div>
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
                                'Update'
                            )} 
                        </button> 
                    </div>
                </div>
            </div>
            
        </form>
        </FormProvider>
    )
}

export default DoctorsListSettingsForm