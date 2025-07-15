import React, { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import TinyMCEEditorField from "../../common/TinyMCEEditorField";
import ImageUploadField from "../../pages/sections/components/ImageUploadField";
import VideoUploadField from "../../pages/sections/components/VideoUploadField";
interface SettingsFormProps {
  initialData?: Partial<any>;
  onSubmit: (data: Partial<any>) => void
  isSubmitting: boolean
}
const GallerySettingsForm: React.FC<SettingsFormProps> = ({ initialData, onSubmit, isSubmitting }) => {
    const router = useRouter();
    const [type, setType] = useState("gallery");
    const [setting, setSetting] = useState<any | null>(null)
    const [error, setError] = useState<string | null>(null)
    const methods = useForm({
        defaultValues: {
        type: type,
        settingData: {
            heroTitle: '',
            
        },
         ...initialData
    }});
    return(
        <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="card mb-3">
                <div className="card-body">
                    <h3 className="section-heading">Gallery Settings</h3>
                    <div className="form-group">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            {...methods.register("settingData.heroTitle")}
                        />
                    </div>
                     <div className="form-group">
                        <label htmlFor="title" className="form-label">Description</label>
                        <TinyMCEEditorField 
                        name="settingData.description" 
                        editorId={'settingData_gallery_description'}
                        register={methods.register}
                        setValue={methods.setValue} />
                    </div>
                     <div className="form-group">
                        <label htmlFor="title" className="form-label">Right Description</label>
                        <TinyMCEEditorField 
                        name="settingData.rightDescription" 
                        editorId={'settingData_rightDescription_description'}
                        register={methods.register}
                        setValue={methods.setValue} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="title" className="form-label">Video Poster Image</label>
                        <ImageUploadField name="settingData.featuredVideoPoster" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="title" className="form-label">Video</label>
                        <VideoUploadField name="settingData.featuredVideo" />
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

export default GallerySettingsForm