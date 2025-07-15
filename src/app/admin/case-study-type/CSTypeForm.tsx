"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import Link from 'next/link';

interface CSTypeFormProps {
  initialData?: Partial<any>;
  onSubmit: (data: Partial<any>) => void
  isSubmitting: boolean
}
const uploadsUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const CSTypeForm: React.FC<CSTypeFormProps> = ({ initialData, onSubmit, isSubmitting }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialData || {
      type: "",
      title: "",
      order: '0',
      description: "",
      storyTitle: "",
      storyButton: {},
      storyButton2: {},
    },
  });

  const onSubmitForm = (data: any) => {
    onSubmit(data)
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmitForm)} encType="multipart/form-data">
        <div className="mb-3">
          <label htmlFor="type" className="form-label">Type *</label>
          <input
            type="text"
            className="form-control"
            {...register("type", { required: "Type is required" })}
          />
          {errors.type && <small className="text-danger">{errors.type?.message?.toString()}</small>}
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title *</label>
          <input
            type="text"
            className="form-control"
            {...register("title", { required: "Title is required" })}
          />
          {errors.title && <small className="text-danger">{errors.title?.message?.toString()}</small>}
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

        <h3 className="mt-5">Real Stories</h3>
        <div className="form-group">
            <label htmlFor="title" className="form-label">Title</label>
            <input
                type="text"
                className="form-control"
                placeholder="Title"
                {...register("storyTitle")}
            />
        </div>
        <div className="form-group">
            <label className="form-label">CTA Button 1</label>
            <div className="row">
            <div className="form-group col-md-6">
                <label htmlFor="meetTitle" className="form-label">Button Text</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Button Text"
                    {...register("storyButton.btnTitle")}
                />
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="meetTitle" className="form-label">Button URL</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Button URL"
                    {...register("storyButton.btnUrl")}
                />
            </div>
            <div className="mb-3 form-check col-md-12 ml-4">
                  <input
                      type="checkbox"
                      id={'storyButton.isNewTab'}
                      className="form-check-input"
                      {...register("storyButton.isNewTab")}
                  />
                  <label className="form-check-label" htmlFor={'storyButton.isNewTab'}>Open In New Tab</label>     
              </div>
          </div>
        </div>
        <div className="form-group">
            <label className="form-label">CTA Button 2</label>
            <div className="row">
            <div className="form-group col-md-6">
                <label htmlFor="meetTitle" className="form-label">Button Text</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Button Text"
                    {...register("storyButton2.btnTitle")}
                />
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="meetTitle" className="form-label">Button URL</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Button URL"
                    {...register("storyButton2.btnUrl")}
                />
            </div>
            <div className="mb-3 form-check col-md-12 ml-4">
                  <input
                      type="checkbox"
                      id={'storyButton2.isNewTab'}
                      className="form-check-input"
                      {...register("storyButton2.isNewTab")}
                  />
                  <label className="form-check-label" htmlFor={'storyButton2.isNewTab'}>Open In New Tab</label>     
              </div>
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
        <Link className="btn btn-outline-secondary ml-2" href={"/admin/case-study-type"}>Cancel</Link>
      </form>
    </div>
  );
}

export default CSTypeForm