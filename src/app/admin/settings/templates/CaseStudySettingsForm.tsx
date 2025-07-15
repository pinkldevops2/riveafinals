import React, { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useRouter } from "next/navigation";
import ImageUploadField from "../../pages/sections/components/ImageUploadField";
interface SettingsFormProps {
  initialData?: Partial<any>;
  onSubmit: (data: Partial<any>) => void
  isSubmitting: boolean
}
const CaseStudySettingsForm: React.FC<SettingsFormProps> = ({ initialData, onSubmit, isSubmitting }) => {
    const router = useRouter();
    const [type, setType] = useState("case-studies");
    const [setting, setSetting] = useState<any | null>(null)
    const [error, setError] = useState<string | null>(null)
    const methods = useForm({
        defaultValues: {
        type: type,
        settingData: {
            heroTitle: '',
            heroDescription: ''
        },
         ...initialData
    }});
    return(
        <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="card mb-3">
                <div className="card-body">
                    <h3 className="section-heading">Case Studies Settings</h3>
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
                        <label htmlFor="title" className="form-label">Hero Description</label>
                        <textarea 
                        className="form-control"
                        {...methods.register("settingData.heroDescription")}
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="title" className="form-label">Hero Image</label>
                        <ImageUploadField name="settingData.heroImage" />
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

export default CaseStudySettingsForm