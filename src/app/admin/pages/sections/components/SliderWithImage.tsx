import { useFormContext, useFieldArray } from 'react-hook-form';
import ImageUploadField from './ImageUploadField';

const SliderWithImage = ({ name }: { name: string }) => {
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
            <div className="mb-3">
              <label>Slide Image</label> <button className='btn btn-sm btn-danger btn-icon float-end' onClick={()=>remove(index)}><i className='fa fa-trash'></i></button>
              <ImageUploadField name={name+`.${index}.image`} ></ImageUploadField>
            </div>
          </div>
        </div>
      ))}

      <button type="button" className='btn btn-dark' onClick={() => append({ title: '', image: '' })}>
        <i className="fa fa-plus"></i> Add Slide
      </button>
    </div>
  );
};
export default SliderWithImage;