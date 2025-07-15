import { useFormContext, useFieldArray } from 'react-hook-form';
import YourNeedsAccordionImage from './YourNeedsAccordionImage';

const YourNeedsAccordion = ({ name }: { name: string }) => {
  const { control, register } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: name,
  });

  return (
    <div>
      {fields.map((field, index) => (
        <div key={field.id} className='card mb-2'>
          <div className='card-body'>
            <div className='row'>
              <div className='col-md-12'>
                <button className='btn btn-sm btn-danger btn-icon float-end' onClick={()=>remove(index)}><i className='fa fa-trash'></i></button>
               </div>
              <div className="mb-3 col-md-12">
                <label>Title</label>
                <input className='form-control' {...register(name+`.${index}.title`)} placeholder="Slide Title" />
              </div>
              <div className="mb-3 col-md-12">
                <label>Description</label>
                <textarea className='form-control' {...register(name+`.${index}.description`)} placeholder="Slide Description" />
              </div>
              <div className="mb-3 col-md-12">
                <label>Image</label>
                <YourNeedsAccordionImage name={name+`.${index}.image`} ></YourNeedsAccordionImage>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button type="button" className='btn btn-dark' onClick={() => append({ title: '', image: '' })}>
        <i className="fa fa-plus"></i> Add Item
      </button>
    </div>
  );
};
export default YourNeedsAccordion;