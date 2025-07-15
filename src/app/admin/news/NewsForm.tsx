"use client";

import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from 'react-select';
import { getCategories } from '@/utils/newsCategories';
import Link from 'next/link';
import TinyMCEEditor from "../common/TinyMCEEditor";
import { toast } from "react-toastify";

interface MenuFormProps {
  initialData?: Partial<any>;
  onSubmit: (data: Partial<any>) => void
  isSubmitting: boolean
}
const uploadsUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const NewsForm: React.FC<MenuFormProps> = ({ initialData, onSubmit, isSubmitting }) => {
  const {
    register,
    handleSubmit,
    setError,
    control,
    reset,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: initialData || {
      name: "",
      categories: "",
      title: "",
      profilePhoto: null,
      image: '',
      order: '0',
      slug: '',
      description: "",
      metaTitle: '',
      metaDescription: '',
    },
  });
  const [content, setContent] = useState("");
  const [preview, setPreview] = useState<string | null>(null);
  const [categoryList, setCategoryList] = useState([]);

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
                  message: "No categories were added in News type"
                });
              }
          }
      });
  }, []);
  useEffect(()=>{
    setValue('description', content);
  }, [content]);
  useEffect(()=>{
    if (initialData && initialData.description) {
      setContent(initialData.description);
    }
  }, []);
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
          <label htmlFor="name" className="form-label">Author *</label>
          <input
            type="text"
            className="form-control"
            {...register("name", { required: "Author is required", minLength: { value: 3, message: "Must be at least 3 characters" } })}
          />
          {errors.name && <small className="text-danger">{errors.name?.message?.toString()}</small>}
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
            <label htmlFor="title" className="form-label">Slug *</label>
            <input
               type="text"
               className="form-control"
               {...register("slug", {  })}
            />
        </div>
        )}

        <div className="mb-3">
          <label htmlFor="image" className="form-label">Image *</label>
          <div className="btn-main-box">
          <input type="file" className="file-input" {...register("profilePhoto", { 
              required: preview || initialData?.image ? false : "Image is required"
            })} onChange={handleFileChange} />
          <div className="btn-box">Upload Image</div>
          </div>
          {preview && <img src={preview} alt="Image Preview" className="mt-3" width={100} />}
          {!preview && initialData && initialData.image && <img src={uploadsUrl+'/'+initialData.image} alt="Image Preview" className="mt-3" width={100} />}
          {!preview && errors.profilePhoto && <small className="text-danger">{errors.profilePhoto?.message?.toString()}</small>}
        </div>


        <div className="mb-3">
          <label className="form-label">Description</label>
          <TinyMCEEditor value={getValues('description')} onChange={setContent} />
          {/* <textarea
            className="form-control"
            rows={3}
            {...register("description", { required: "Description is required", minLength: { value: 10, message: "Must be at least 10 characters" } })}
          ></textarea> */}
          {errors.description && <small className="text-danger">{errors.description?.message?.toString()}</small>}
        </div>
        <div className="mb-3">
          <label className="form-label">Order</label>
          <input type="number" min="0" className="form-control" {...register("order", {  })} />
          {errors.order && <small className="text-danger">{errors.order?.message?.toString()}</small>}
        </div>
        <div className="row mb-3">
            <div className="col-md-12">
                <label htmlFor="metaTitle" className="form-label">Meta Title *</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Meta Title"
                    {...register("metaTitle", { required: "Meta Title is required." })}
                />
            {errors.metaTitle && <p className="text-red-500">{errors.metaTitle?.message?.toString()}</p>}
            </div>
        </div>
        <div className="row mb-3">
            <div className="col-md-12">
                <label htmlFor="metaDescription" className="form-label">Meta Description *</label>
                <textarea
                    className="form-control"
                    placeholder="Meta Description"
                    {...register("metaDescription", { required: "Meta Description is required." })}
                />
                {errors.metaDescription && <p className="text-red-500">{errors.metaDescription?.message?.toString()}</p>}
            </div>
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
        <Link className="btn btn-outline-secondary ml-2" href={"/admin/news/"}>Cancel</Link>
      </form>
    </div>
  );
}

export default NewsForm