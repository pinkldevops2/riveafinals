"use client";

import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from 'react-select';
import { getCategories } from '@/utils/testimonialCategories';
import Link from 'next/link';
import { toast } from "react-toastify";

const types = [
  { value: 'image', label: 'Image' },
  { value: 'video', label: 'Video' },
];
interface TestimonialFormProps {
  initialData?: Partial<any>;
  onSubmit: (data: Partial<any>) => void
  isSubmitting: boolean
}
const uploadsUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const TestimonialForm: React.FC<TestimonialFormProps> = ({ initialData, onSubmit, isSubmitting }) => {
  const {
    register,
    handleSubmit,
    setError,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialData || {
      title: "",
      type: "",
      categories: [],
      testimonialPhoto: null,
      testimonialVideo: null,
      testimonialVideoPoster: null,
      image: '',
      order: '0',
      slug: '',
      description: "",
    },
  });

  const [preview, setPreview] = useState<string | null>(null);
  const [video_preview, setVideoPreview] = useState<string | null>(null);
  const [posterPreview, setPosterPreview] = useState<string | null>(null);


  const [categoryList, setCategoryList] = useState([]);
  const [uploadType, setUploadType] = useState(initialData?.type || 'image');

  useEffect(() => {
      getCategories(1, 1000).then(result => {
          if (result.error) {
              toast.error(result.error);
              // setError(result.error || 'Failed to get categories')
          } else {
              if (result.data && result.data.length > 0) {
                const formattedOptions = (result.data).map((item: any)=>({
                  value: item._id,
                  label: item.name
                }));
                  setCategoryList(
                    formattedOptions
                  );
              }else{
                setError("categories", {
                  type: "manual",
                  message: "No categories were added in testimonial type"
                });
              }
          }
      });
  }, []);


  const onSubmitForm = (data: any) => {
    onSubmit(data)
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const fieldName = event.target.name;
      const previewUrl = URL.createObjectURL(file);
      if (fieldName == 'testimonialPhoto') {
        setPreview(previewUrl);
      }
      if (fieldName == 'testimonialVideoPoster') {
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
          <label htmlFor="categories" className="form-label">Category *</label>
          {categoryList.length > 0 && (
            <Controller
            name="categories"
            control={control}
            rules={{ required: "category is required" }}
            render={({ field }) => (
              <Select
                {...field}
                options={categoryList}
                isMulti
                isClearable={true}
                value={categoryList.filter((opt: any) => field.value?.includes(opt.value))}
                onChange={(selected: any) => field.onChange(selected.map((opt: any) => opt.value))}
                isLoading={!categoryList.length}
                placeholder="Select Categories"
              />
            )}
          />
        )}
          {errors.categories &&  <small className="text-danger">{errors.categories?.message?.toString()}</small>}
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title *</label>
          <input
            type="text"
            className="form-control"
            {...register("title", { required: "Title is required", minLength: { value: 3, message: "Must be at least 3 characters" } })}
          />
          {errors.title && <small className="text-danger">{errors.title?.message?.toString()}</small>}
        </div>

        {initialData && initialData.slug !== '' && (
        <div className="mb-3">
            <label htmlFor="slug" className="form-label">Slug *</label>
            <input
               type="text"
               className="form-control"
               {...register("slug", {  })}
            />
        </div>
        )}

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
            <label htmlFor="testimonialPhoto" className="form-label">Image *</label>
            <div className="btn-main-box">
            <input type="file" className="file-input" {...register("testimonialPhoto", { 
                required: preview || initialData?.image ? false : "Image is required"
              })} onChange={handleFileChange} />
            <div className="btn-box">Upload Image</div>
            </div>
            {preview && <img src={preview} alt="Image Preview" className="mt-3" width={100} />}
            {!preview && initialData && initialData.image && <img src={uploadsUrl+'/'+initialData.image} alt="Image Preview" className="mt-3" width={100} />}
            {!preview && errors.testimonialPhoto && <small className="text-danger">{errors.testimonialPhoto?.message?.toString()}</small>}
          </div>
        )}

        <div className="row">
        {uploadType == 'video' && ( 
          <div className="mb-3 col-md-4">
            <label className="form-label">Video</label>
            <div className="btn-main-box">
              <input type="file" className="file-input" accept="video/*" {...register("testimonialVideo", { 
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
            {!video_preview && errors.testimonialVideo && <small className="text-danger">{errors.testimonialVideo?.message?.toString()}</small>}
          </div>
        )}

        {uploadType == 'video' && ( 
          <div className="mb-3 col-md-4">
              <label className="form-label">Poster Image</label>
              <div className="btn-main-box">
                <input type="file" className="file-input" {...register("testimonialVideoPoster", { 
                    required: posterPreview || initialData?.videoPoster ? false : "Poster is required"
                  })} onChange={handleFileChange} />
                <div className="btn-box">Upload Image</div>
                </div>
              {posterPreview && <img src={posterPreview} alt="Poster Preview" className="mt-3" width={100} />}
              {!posterPreview && initialData && initialData.videoPoster && <img src={uploadsUrl+'/'+initialData.videoPoster} alt="Poster Preview" className="mt-3" width={100} />}
              {!posterPreview && errors.testimonialVideoPoster && <small className="text-danger">{errors.testimonialVideoPoster?.message?.toString()}</small>}
            </div>
          )}
      </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows={3}
            {...register("description", {  })}
          ></textarea>
          {errors.description && <small className="text-danger">{errors.description?.message?.toString()}</small>}
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
        <Link className="btn btn-outline-secondary ml-2" href={"/admin/testimonials/"}>Cancel</Link>
      </form>
    </div>
  );
}

export default TestimonialForm