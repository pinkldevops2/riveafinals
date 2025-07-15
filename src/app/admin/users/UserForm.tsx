"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
type UserFormData = {
  username: string;
  email: string;
  password: string;
  new_password: string;
  profilePhoto: FileList;
};
interface UserFormProps {
  initialData?: Partial<any>;
  onSubmit: (data: Partial<any>) => void
  isSubmitting: boolean
  isUpdateMode: boolean
}
const uploadsUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const UserForm: React.FC<UserFormProps> = ({ initialData, onSubmit, isSubmitting, isUpdateMode }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialData || {
      username: "",
      email: "",
      password: "",
      new_password: "",
      profilePhoto: null,
      profile_picture: ''
    },
  });

  const [preview, setPreview] = useState<string | null>(null);

  const onSubmitForm = (data: any) => {
    onSubmit(data)
  };
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
            {...register("username", { required: "Name is required", minLength: { value: 3, message: "Must be at least 3 characters" } })}
          />
          {errors.username && <small className="text-danger">{errors.username?.message?.toString()}</small>}
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
          <label className="form-label">Password {isUpdateMode && (
            <small>(Leave blank if not want to change password.)</small>
          )}</label>
          <input
            type="password"
            className="form-control"
            {...register("new_password", { 
              required: isUpdateMode ? false : "Password is required", // Required only if adding
              minLength: isUpdateMode ? undefined : { value: 6, message: "Password must be at least 6 characters" },
            })}
          />
          
          {errors.new_password && <small className="text-danger">{errors.new_password?.message?.toString()}</small>}
        </div>
        <div className="mb-3">
          <label className="form-label">Profile Photo</label>
          <input type="file" className="form-control" {...register("profilePhoto")} onChange={handleFileChange} />
          {preview && <img src={preview} alt="Profile Preview" className="mt-2" width={100} />}
          {!preview && initialData && initialData.profile_picture && <img src={uploadsUrl+'/'+initialData.profile_picture} alt="Profile Preview" className="mt-2" width={100} />}
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
        <a href="/admin/users" className="btn btn-outline-secondary ml-2">
                   Cancel
                </a> 
      </form>
    </div>
  );
}

export default UserForm