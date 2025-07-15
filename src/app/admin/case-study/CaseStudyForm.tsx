"use client";

import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from 'react-select';
import { getAllCSType, getCSCategorybyType } from '@/utils/caseStudyCategories';
import Link from 'next/link';
import TinyMCEEditor from "../common/TinyMCEEditor";
import { toast } from "react-toastify";

interface CaseStudyFormProps {
  initialData?: Partial<any>;
  onSubmit: (data: Partial<any>) => void
  isSubmitting: boolean
}
const uploadsUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const CaseStudyForm: React.FC<CaseStudyFormProps> = ({ initialData, onSubmit, isSubmitting }) => {
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
      title: "",
      subTitle: "",
      description: "",
      metaTitle: '',
      metaDescription: '',
      photo: null,
      image: '',
      order: '0',
      slug: '',
      typeId: "",
      categoryId: ""
    },
  });

  const [content, setContent] = useState("");
  const [preview, setPreview] = useState<string | null>(null);

  const [categoryList, setCategoryList] = useState([]);
  const [csType, setCSType] = useState([]);
  useEffect(() => {
      getAllCSType().then(result => {
          if (result.error) {
              toast.error(result.error);
              // setError(result.error || 'Failed to get categories')
          } else {
              if (result.data && result.data.length > 0) {
                const formattedOptions = (result.data).map((item: any)=>({
                  value: item._id,
                  label: item.type
                }));
                setCSType(
                  formattedOptions
                );
              }else{
                setError("typeId", {
                  type: "manual",
                  message: "No type id is added in case study type"
                });
              }
          }
      });
      if (initialData && initialData.typeId !== '') {
        getCategoriesByType(initialData?.typeId);
      }
      if (initialData && initialData.description) {
        setContent(initialData.description);
      }
  }, []);

  useEffect(()=>{
    setValue('description', content);
  }, [content]);

  const onSubmitForm = (data: any) => {
    onSubmit(data)
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const fieldName = event.target.name;
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
    }
  };

  const handleTypeChange = (onChange: (value: string | null) => void) => 
    (selectedOption: { value: string; label: string } | null) => {
      onChange(selectedOption?.value ?? null);
      if (selectedOption?.value) {
        getCategoriesByType(selectedOption?.value);
      }else{
        setCategoryList([]);
      }
  };

  const getCategoriesByType = (typeId: any) => {
    getCSCategorybyType(typeId).then(result => {
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
              setError("categoryId", {
                type: "manual",
                message: "No categories were added in case-study"
              });
            }
        }
    });
  }

  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmitForm)} encType="multipart/form-data">
        <div className="mb-3">
          <label htmlFor="typeId" className="form-label">Case Study Type *</label>
          {csType.length > 0 && (
            <Controller
            name="typeId"
            control={control}
            rules={{ required: "Case Study Type is required" }}
            render={({ field }) => (
              <Select
                {...field}
                options={csType}
                value={csType.find((opt: any) => opt.value === field.value) || null}
                onChange={handleTypeChange(field.onChange)}
                placeholder="Select Type"
              />
            )}
          />
        )}
          {errors.typeId &&  <small className="text-danger">{errors.typeId?.message?.toString()}</small>}
        </div>
        {categoryList.length > 0 && (
          <div className="mb-3">
            <label htmlFor="categoryId" className="form-label">Category *</label>
              <Controller
              name="categoryId"
              control={control}
              rules={{ required: "Category is required" }}
              render={({ field }) => (
                <Select
                  {...field}
                  options={categoryList ? categoryList : []}
                  value={categoryList.find((opt: any) => opt.value === field.value) || null}
                  onChange={(selected: any) => field.onChange(selected?.value)}
                  placeholder="Select Category"
                />
              )}
            />
          
            {errors.categoryId &&  <small className="text-danger">{errors.categoryId?.message?.toString()}</small>}
          </div>
        )}

        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title *</label>
          <input
            type="text"
            className="form-control"
            {...register("title", { required: "Title is required", minLength: { value: 3, message: "Must be at least 3 characters" } })}
          />
          {errors.title && <small className="text-danger">{errors.title?.message?.toString()}</small>}
        </div>

        <div className="mb-3">
          <label htmlFor="subTitle" className="form-label">Sub-Title *</label>
          <input
            type="text"
            className="form-control"
            {...register("subTitle", { required: "Sub-Title is required" })}
          />
          {errors.subTitle && <small className="text-danger">{errors.subTitle?.message?.toString()}</small>}
        </div>

        {initialData && initialData.slug !== '' && (
        <div className="mb-3">
            <label htmlFor="slug" className="form-label">Slug *</label>
            <input
               type="text"
               className="form-control"
               {...register("slug", { required: "Slug is required" })}
            />
          {errors.slug && <small className="text-danger">{errors.slug?.message?.toString()}</small>}
        </div>
        )}

        <div className="mb-3">
          <label htmlFor="photo" className="form-label">Image *</label>
          <div className="btn-main-box">
          <input type="file" className="file-input" {...register("photo", { 
              required: preview || initialData?.image ? false : "Image is required"
            })} onChange={handleFileChange} />
          <div className="btn-box">Upload Image</div>
          </div>
          {preview && <img src={preview} alt="Image Preview" className="mt-3" width={100} />}
          {!preview && initialData && initialData.image && <img src={uploadsUrl+'/'+initialData.image} alt="Image Preview" className="mt-3" width={100} />}
          {!preview && errors.photo && <small className="text-danger">{errors.photo?.message?.toString()}</small>}
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description </label>
          <TinyMCEEditor value={getValues('description')} onChange={setContent} />
          {/*<textarea
            className="form-control"
            rows={3}
            {...register("description", { required: "Description is required", minLength: { value: 10, message: "Must be at least 10 characters" } })}
          ></textarea>*/}
          {errors.description && <small className="text-danger">{errors.description?.message?.toString()}</small>}
        </div>

        <div className="mb-3">
          <label htmlFor="order" className="form-label">Order</label>
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
        <Link className="btn btn-outline-secondary ml-2" href={"/admin/case-study/"}>Cancel</Link>
      </form>
    </div>
  );
}

export default CaseStudyForm