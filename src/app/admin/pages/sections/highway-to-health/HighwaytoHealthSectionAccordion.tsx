import { useFormContext, useFieldArray } from 'react-hook-form';
import ImageUploadField from '../components/ImageUploadField';
import TinyMCEEditorField from '@/app/admin/common/TinyMCEEditorField';

const HighwaytoHealthSectionAccordion = ({ name }: { name: string }) => {
  const { control, register, setValue } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: name,
  });

  return (
    <div>
      {fields.map((field, index) => (
        <div key={field.id} className='card mb-2'>
          <div className='card-body'>
            <div className='mb-3'>
                <button className='btn btn-sm btn-danger btn-icon float-end' onClick={()=>remove(index)}><i className='fa fa-trash'></i></button>
            </div>
            <div className="mb-3">
              <label>Icon</label>
              <ImageUploadField name={name+`.${index}.image`} ></ImageUploadField>
            </div>
            <div className="mb-3">
                <label className="form-label">Title</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Title"
                    {...register(name+`.${index}.title`)}
                />
            </div>
            <div className="mb-3">
              <label>Description</label>
              <input
                    type="text"
                    className="form-control"
                    placeholder="Description"
                    {...register(name+`.${index}.description`)}
                />
              {/* <TinyMCEEditorField 
                  key={name+`.${index}.description`}
                  name={name+`.${index}.description`} 
                  editorId={'accordion_highwaytoHealth_description_'+index}
                  register={register}
                  setValue={setValue} /> */}
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
export default HighwaytoHealthSectionAccordion;