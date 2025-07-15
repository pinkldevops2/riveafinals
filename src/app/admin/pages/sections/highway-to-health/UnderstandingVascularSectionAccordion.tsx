import { useFormContext, useFieldArray } from 'react-hook-form';
import TinyMCEEditorField from '@/app/admin/common/TinyMCEEditorField';

const UnderstandingVascularSectionAccordion = ({ name }: { name: string }) => {
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
              <textarea className='form-control' {...register(name+`.${index}.description`)} placeholder="Description" />
              {/* <TinyMCEEditorField 
                key={name+`.${index}.description`}
                name={name+`.${index}.description`} 
                editorId={'accordion_UnderstandingVascular_description_'+index}
                register={register}
                setValue={setValue} /> */}
            </div>
            
          </div>
        </div>
      ))}
      {fields.length < 8 && 
      <button type="button" className='btn btn-dark' onClick={() => append({ title: '', image: '' })}>
        <i className="fa fa-plus"></i> Add Item
      </button>
      }
    </div>
  );
};
export default UnderstandingVascularSectionAccordion;