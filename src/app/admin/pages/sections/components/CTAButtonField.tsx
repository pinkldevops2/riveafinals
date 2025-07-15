import { useState } from "react";
import { useFormContext } from "react-hook-form";
const CTAButtonField = ({ name }: { name: string }) => {
  const { register, setValue , getValues} = useFormContext();
  return (
    <div className="row">
      <div className="form-group col-md-6">
          <label htmlFor="meetTitle" className="form-label">Button Text</label>
          <input
              type="text"
              className="form-control"
              placeholder="Button Text"
              {...register(name+".btnTitle")}
          />
      </div>
      <div className="form-group col-md-6">
          <label htmlFor="meetTitle" className="form-label">Button URL</label>
          <input
              type="text"
              className="form-control"
              placeholder="Button URL"
              {...register(name+".btnUrl")}
          />
      </div>
      <div className="mb-3 form-check col-md-12 ml-4">
            <input
                type="checkbox"
                id={name+'.isNewTab'}
                className="form-check-input"
                {...register(name+".isNewTab")}
            />
            <label className="form-check-label" htmlFor={name+'.isNewTab'}>Open In New Tab</label>     
        </div>
    </div>
  );
};
export default CTAButtonField;