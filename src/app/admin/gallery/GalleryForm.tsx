"use client";

import { useForm, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import Select from 'react-select';
import Link from 'next/link';
import TinyMCEEditor from "../common/TinyMCEEditor";

interface MenuFormProps {
  initialData?: Partial<any>;
  onSubmit: (data: Partial<any>) => void
  isSubmitting: boolean
}
const uploadsUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const GalleryForm: React.FC<MenuFormProps> = ({ initialData, onSubmit, isSubmitting }) => {
  const {
    register,
    handleSubmit,
    setError,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialData || {
      type: "",
      galleryPhoto: null,
      galleryVideo: null,
      galleryVideoPoster: null,
      image: '',
      video: '',
      videoPoster: '',
      order: '0'
    },
  });
  const types = [
    { value: 'image', label: 'Image' },
    { value: 'video', label: 'Video' },
  ];
  const [preview, setPreview] = useState<string | null>(null);
  const [video_preview, setVideoPreview] = useState<string | null>(null);
  const [posterPreview, setPosterPreview] = useState<string | null>(null);
  const [uploadType, setUploadType] = useState(initialData?.type || 'image');

  const onSubmitForm = (data: any) => {
    onSubmit(data)
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const fieldName = event.target.name;
      const previewUrl = URL.createObjectURL(file);
      if (fieldName == 'galleryPhoto') {
        setPreview(previewUrl);
      }
      if (fieldName == 'galleryVideoPoster') {
        setPosterPreview(previewUrl);
      }
    }
  };

  const handleVideoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setVideoPreview(previewUrl);
    }
  };

  const handleTypeChange = (onChange: (value: string | null) => void) => 
    (selectedOption: { value: string; label: string } | null) => {
      onChange(selectedOption?.value ?? null);
      setUploadType(selectedOption?.value);
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmitForm)} encType="multipart/form-data">
        <div className="mb-3">
          <label htmlFor="type" className="form-label">Type *</label>
          <Controller
            name="type"
            control={control}
            rules={{ required: "Type is required" }}
            render={({ field }) => (
              <Select
                {...field}
                options={types}
                value={types.find((opt: any) => opt.value === field.value) || null}
                onChange={handleTypeChange(field.onChange)}
                placeholder="Select Type"
              />
            )}
          />
          {errors.type && <small className="text-danger">{errors.type?.message?.toString()}</small>}
        </div>
        {uploadType == 'image' && (
          <div className="mb-3">
            <label htmlFor="image" className="form-label">Image *</label>
            <div className="btn-main-box">
            <input type="file" className="file-input" {...register("galleryPhoto", { 
                required: preview || initialData?.image ? false : "Image is required"
              })} onChange={handleFileChange} />
            <div className="btn-box">Upload Image</div>
            </div>
            {preview && <img src={preview} alt="Image Preview" className="mt-3" width={100} />}
            {!preview && initialData && initialData.image && <img src={uploadsUrl+'/'+initialData.image} alt="Image Preview" className="mt-3" width={100} />}
            {!preview && errors.galleryPhoto && <small className="text-danger">{errors.galleryPhoto?.message?.toString()}</small>}
          </div>
        )}

        <div className="row">
          {uploadType == 'video' && ( 
            <div className="mb-3 col-md-4">
              <label className="form-label">Video</label>
              <div className="btn-main-box">
                <input type="file" className="file-input" accept="video/*" {...register("galleryVideo", { 
                  required: video_preview || initialData?.video ? false : "Video is required"
                })} onChange={handleVideoChange} />
                <div className="btn-box">Upload Video</div>
              </div>
              {video_preview && <div className="video-preview mt-3">
                  <video
                    src={video_preview}
                    controls
                    width={320}
                    height={240}
                    className="rounded shadow-md"
                  />
              </div>}
              {!video_preview && initialData && initialData.video && 
              <div className="video-preview mt-3">
                  <video
                    src={uploadsUrl+'/'+initialData.video}
                    controls
                    width={320}
                    height={240}
                    className="rounded shadow-md"
                  />
              </div>
              }
              {!video_preview && errors.galleryVideo && <small className="text-danger">{errors.galleryVideo?.message?.toString()}</small>}
            </div>
          )}

          {uploadType == 'video' && ( 
            <div className="mb-3 col-md-4">
                <label className="form-label">Poster Image</label>
                <div className="btn-main-box">
                  <input type="file" className="file-input" {...register("galleryVideoPoster", { 
                      required: posterPreview || initialData?.videoPoster ? false : "Poster is required"
                    })} onChange={handleFileChange} />
                  <div className="btn-box">Upload Image</div>
                  </div>
                {posterPreview && <img src={posterPreview} alt="Poster Preview" className="mt-3" width={100} />}
                {!posterPreview && initialData && initialData.videoPoster && <img src={uploadsUrl+'/'+initialData.videoPoster} alt="Poster Preview" className="mt-3" width={100} />}
                {!posterPreview && errors.galleryVideoPoster && <small className="text-danger">{errors.galleryVideoPoster?.message?.toString()}</small>}
              </div>
            )}
        </div>

        <div className="mb-3">
          <label className="form-label">Order</label>
          <input type="number" min="0" className="form-control" {...register("order", {  })} />
          {errors.order && <small className="text-danger">{errors.order?.message?.toString()}</small>}
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
        <Link className="btn btn-outline-secondary ml-2" href={"/admin/gallery/"}>Cancel</Link>
      </form>
    </div>
  );
}

export default GalleryForm