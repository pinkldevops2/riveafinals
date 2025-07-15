import { useFormContext, useFieldArray } from 'react-hook-form';
import ImageUploadField from '../components/ImageUploadField';

const YourNeedsAccordionImage = ({ name }: { name: string }) => {
  const { control, register } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: name,
  });

  return (
    <div className='row'>
      {fields.map((field, index) => (
        <div key={field.id} className='col-md-4'>
          <div className='card mb-4'>
            <div className='card-body'>
              <div className="mb-3">
                <label>Slide Image {index+1}</label>  <button className='btn btn-sm btn-danger btn-icon float-end' onClick={()=>remove(index)}><i className='fa fa-trash'></i></button>
                <ImageUploadField name={name+`.${index}.image`} ></ImageUploadField>
              </div>
            </div>
          </div>
        </div>
      ))}
      {fields.length < 6 && 
      <div className='col-md-12'>
      <button type="button" className='btn btn-dark' onClick={() => append({ title: '', image: '' })}>
        <i className="fa fa-plus"></i> Add Slide
      </button>
      </div>
      }
    </div>
  );
};
export default YourNeedsAccordionImage;