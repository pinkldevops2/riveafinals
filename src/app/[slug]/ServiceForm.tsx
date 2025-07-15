"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { submitContactForm } from "@/utils/frontApi";
import { toast } from 'react-toastify';
import { useRouter } from "next/navigation";
export default function ServiceForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();
  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    setMessage("");

    try {
      submitContactForm(data).then(result => {
                  if (result.success == true) {
                    router.push('/thank-you');
                    //toast.success("thank you! your request has been submitted successfully.");
                  } else {
                    toast.error(result.message);
                  }
              });
      reset();
    } catch (error) {
      toast.error("Failed to send message. Try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <fieldset className="row">
        <div className="col-xs-12">
          <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            {...register("name", { required: "Name is required." })}
          />
          {errors.name && <p className="text-red-500">{errors.name?.message?.toString()}</p>}
        </div>
      </div>

      {/* <div className="form-group row">
        <div className="col-md-12">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" },
            })}
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>
      </div> */}
      <div className="col-xs-12">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Phone Number"
            {...register("phone", {
              required: "Phone number is required.",
              pattern: { value: /^[0-9]{10}$/, message: "Must be a valid 10-digit number" },
            })}
          />
          {errors.phone && <p className="text-red-500">{errors.phone?.message?.toString()}</p>}
        </div>
      </div>
      <div className="col-xs-12">
        <div className="form-group">
          {/* <select className="my-select selectpicker form-control" {...register("department", { required: "Schedule is required." })}>
            <option value={''}>Best Time to Reach You</option>
            <option value={'Schedule 2'}>Schedule 2</option>
            <option value={'Schedule 3'}>Schedule 3</option>
          </select> */}
          <input
            type="text"
            className="form-control"
            placeholder="Best Time to Reach You"
            {...register("department", { required: "Schedule is required." })}
          />
          {errors.department && <small className="text-danger">{errors.department?.message?.toString()}</small>}
        </div>
        </div>
        <div className="col-xs-12">
        <div className="form-group">
          <input type="text"
            className="form-control"
            placeholder="What Can We Help You With? (Brief Description)"
            {...register("message", { required: "Description is required." })}
          />
          {errors.message && <p className="text-red-500">{errors.message?.message?.toString()}</p>}
        </div>
        </div>
        <div className="col-xs-12">
        <div className="form-group form-action">
        <button type="submit" className="btn_cmn btn-right-icon" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
        </div>
      </div>
      </fieldset>
      {message && <p className="mt-2 text-green-500">{message}</p>}
    </form>
  );
}

