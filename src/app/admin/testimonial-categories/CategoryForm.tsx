"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import Link from 'next/link';

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
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialData || {
      name: "",
      order: '0',
      description: "",
    },
  });

  const onSubmitForm = (data: any) => {
    onSubmit(data)
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmitForm)} encType="multipart/form-data">
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
        <Link className="btn btn-outline-secondary ml-2" href={"/admin/testimonial-categories"}>Cancel</Link>
      </form>
    </div>
  );
}

export default CategoryForm