"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { submitContactForm } from "@/utils/frontApi";
import { toast } from 'react-toastify';
import { useRouter } from "next/navigation";
export default function BookAppointmentForm() {
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
                    const closeBtn = document.querySelector('.close_icon');
                    if (closeBtn instanceof HTMLElement) {
                      closeBtn.click();
                    }
                    setTimeout(()=>{
                      reset();
                    },800);
                    router.push('/thank-you');
                    //toast.success("Your message has been sent. Thank you!");
                  } else {
                    toast.error(result.message);
                  }
              });
      
    } catch (error) {
      toast.error("Failed to send message. Try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="booking-form">
      <fieldset className="row">
        <div className="col-xs-12">
          <div className="form-group">
          <input
            type="text"
            className="form-control"
            autoComplete="off"
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
            autoComplete="off"
            {...register("phone", {
              required: "Phone number is required.",
              pattern: { value: /^[0-9]{10}$/, message: "Must be a valid 10-digit number" },
            })}
          />
          {errors.phone && <p className="text-red-500">{errors.phone?.message?.toString()}</p>}
        </div>
      </div>
      <div className="col-6 col-sm-6">
        <div className="form-group pe-1">
          <input
            type="date"
            className="form-control"
            placeholder="Date"
            {...register("date", {
              required: "Date is required.",
            })}
          />
          {errors.date && <p className="text-red-500">{errors.date?.message?.toString()}</p>}
        </div>
      </div>
      <div className="col-6 col-sm-6">
        <div className="form-group ps-1">
          <input
            type="time"
            className="form-control"
            placeholder="Time"
            {...register("time", {
              required: "Time is required.",
            })}
          />
          {errors.time && <p className="text-red-500">{errors.time?.message?.toString()}</p>}
        </div>
      </div>
      <div className="col-xs-12">
        <div className="form-group">
          <select className="form-select" {...register("department", { required: "Specialization is required." })}>
            <option value={''}>Select Specialization</option>
            <option value={'Interventional Radiology'}>Interventional Radiology</option>
            <option value={'Vascular & Endovascular Surgery'}>Vascular & Endovascular Surgery</option>
          </select>
          {/* <input
            type="text"
            className="form-control"
            placeholder="Best Time to Reach You"
            {...register("department", { required: "Schedule is required." })}
          /> */}
          {errors.department && <small className="text-danger">{errors.department?.message?.toString()}</small>}
        </div>
        </div>
        <div className="col-xs-12">
        <div className="form-group">
          <input type="text"
            className="form-control"
            autoComplete="off"
            placeholder="Additional Comments"
            {...register("message", { required: "Comments is required." })}
          />
          {errors.message && <p className="text-red-500">{errors.message?.message?.toString()}</p>}
        </div>
        </div>
        <div className="col-xs-12">
        <div className="form-action">
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

