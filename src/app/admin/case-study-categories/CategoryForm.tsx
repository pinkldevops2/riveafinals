"use client";

import { useForm, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import Select from 'react-select';
import { getAllCSType } from '@/utils/caseStudyCategories';
import Link from 'next/link';
import { toast } from "react-toastify";

interface CategoryFormProps {
  initialData?: Partial<any>;
  onSubmit: (data: Partial<any>) => void
  isSubmitting: boolean
}
const uploadsUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const CategoryForm: React.FC<CategoryFormProps> = ({ initialData, onSubmit, isSubmitting }) => {
  const {
    register,
    handleSubmit,
    setError,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialData || {
      typeId: "",
      name: "",
      order: '0',
      description: "",
    },
  });

  const [csType, setCSType] = useState([]);
  const onSubmitForm = (data: any) => {
    onSubmit(data)
  };

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
  }, []);

  const handleTypeChange = (onChange: (value: string | null) => void) => 
    (selectedOption: { value: string; label: string } | null) => {
      onChange(selectedOption?.value ?? null);
  };

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

        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name *</label>
          <input
            type="text"
            className="form-control"
            {...register("name", { required: "Name is required", minLength: { value: 3, message: "Must be at least 3 characters" } })}
          />
          {errors.name && <small className="text-danger">{errors.name?.message?.toString()}</small>}
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description </label>
          <textarea
            className="form-control"
            rows={3}
            {...register("description", { })}
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
        <Link className="btn btn-outline-secondary ml-2" href={"/admin/case-study-categories"}>Cancel</Link>
      </form>
    </div>
  );
}

export default CategoryForm