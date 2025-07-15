"use client";

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import TinyMCEEditor from "../common/TinyMCEEditor";
type DoctorFormData = {
  name: string;
  email: string;
  profilePhoto: FileList;
  profile_picture: string;
  mobile: string;
  degree: string;
  speciality: string;
  languages: string;
  gender: string;
  description: string;
};
interface MenuFormProps {
  initialData?: Partial<any>;
  onSubmit: (data: Partial<any>) => void
  isSubmitting: boolean
}
const uploadsUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const DoctorForm: React.FC<MenuFormProps> = ({ initialData, onSubmit, isSubmitting }) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: initialData || {
      name: "",
      email: "",
      profile_picture: '',
      mobile: "",
      degree: "",
      speciality: "",
      languages: "",
      gender: "",
      description: "",
      longDescription: ""
    },
  });

  const [preview, setPreview] = useState<string | null>(null);
  const [content, setContent] = useState("");
  const onSubmitForm = (data: any) => {
    onSubmit(data)
  };
  useEffect(()=>{
      setValue('longDescription', content);
    }, [content]);
    useEffect(()=>{
      if (initialData && initialData.longDescription) {
        setContent(initialData.longDescription);
      }
    }, []);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmitForm)} encType="multipart/form-data">
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            {...register("name", { required: "Name is required", minLength: { value: 3, message: "Must be at least 3 characters" } })}
          />
          {errors.name && <small className="text-danger">{errors.name?.message?.toString()}</small>}
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            {...register("email", {  pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" } })}
          />
          {errors.email && <small className="text-danger">{errors.email?.message?.toString()}</small>}
        </div>

        <div className="mb-3">
          <label className="form-label">Profile Photo</label>
          <input type="file" className="form-control" {...register("profilePhoto", { 
              required: preview || initialData?.profile_picture ? false : "Profile Photo is required"
            })} onChange={handleFileChange} />
          {preview && <img src={preview} alt="Profile Preview" className="mt-2" width={100} />}
          {!preview && initialData && initialData.profile_picture && <img src={uploadsUrl+'/'+initialData.profile_picture} alt="Profile Preview" className="mt-2" width={100} />}
          {!preview && errors.profilePhoto && <small className="text-danger">{errors.profilePhoto?.message?.toString()}</small>}
        </div>

        <div className="mb-3">
          <label className="form-label">Mobile</label>
          <input
            type="text"
            className="form-control"
            {...register("mobile", {  pattern: { value: /^[0-9]{10}$/, message: "Must be a valid 10-digit number" } })}
          />
          {errors.mobile && <small className="text-danger">{errors.mobile?.message?.toString()}</small>}
        </div>

        <div className="mb-3">
          <label className="form-label">Degree (comma-separated)</label>
          <input type="text" className="form-control" {...register("degree", { required: "Degree is required" })} />
          {errors.degree && <small className="text-danger">{errors.degree?.message?.toString()}</small>}
        </div>

        <div className="mb-3">
          <label className="form-label">Speciality (comma-separated)</label>
          <input type="text" className="form-control" {...register("speciality", {  })} />
          {errors.speciality && <small className="text-danger">{errors.speciality?.message?.toString()}</small>}
        </div>

        <div className="mb-3">
          <label className="form-label">Languages (comma-separated)</label>
          <input type="text" className="form-control" {...register("languages", { })} />
          {errors.languages && <small className="text-danger">{errors.languages?.message?.toString()}</small>}
        </div>

        <div className="mb-3">
          <label className="form-label">Gender</label>
          <select className="form-select" {...register("gender", { required: "Gender is required" })}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && <small className="text-danger">{errors.gender?.message?.toString()}</small>}
        </div>

        <div className="mb-3">
          <label className="form-label">Short Description</label>
          <textarea
            className="form-control"
            rows={3}
            {...register("description", { required: "Description is required", minLength: { value: 10, message: "Must be at least 10 characters" } })}
          ></textarea>
          {errors.description && <small className="text-danger">{errors.description?.message?.toString()}</small>}
        </div>
        <div className="mb-3">
                  <label className="form-label">Description</label>
                  <TinyMCEEditor value={getValues('longDescription')} onChange={setContent} />
                  {/* <textarea
                    className="form-control"
                    rows={3}
                    {...register("description", { required: "Description is required", minLength: { value: 10, message: "Must be at least 10 characters" } })}
                  ></textarea> */}
                  {errors.description && <small className="text-danger">{errors.description?.message?.toString()}</small>}
                </div>
        <div className="mb-3 form-check">
            <input
                type="checkbox"
                className="form-check-input"
                {...register("isActive")}
            />
            <label className="form-check-label" htmlFor="isActive">Active (visible on the site)</label>     
        </div>
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
                'Save'
            )} 
        </button> 
        <a href="/admin/doctors-list" className="btn btn-outline-secondary ml-2">
                   Cancel
                </a> 
      </form>
    </div>
  );
}

export default DoctorForm