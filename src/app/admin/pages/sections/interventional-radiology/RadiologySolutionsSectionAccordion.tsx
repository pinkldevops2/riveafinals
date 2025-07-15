import { useFormContext, useFieldArray } from 'react-hook-form';
import TinyMCEEditorField from '@/app/admin/common/TinyMCEEditorField';

const RadiologySolutionsSectionAccordion = ({ name }: { name: string }) => {
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
              <label>Title</label>
              <input className='form-control' {...register(name+`.${index}.title`)} placeholder="Title" />
            </div>
            <div className="mb-3">
              <label>Description</label>
              <TinyMCEEditorField 
                key={name+`.${index}.description`}
                name={name+`.${index}.description`} 
                editorId={'accordion_RadiologySolutions_description_'+index}
                register={register}
                setValue={setValue} />
            </div>
            <div className="mb-3">
              <label>Learn More Link</label>
              <input className='form-control' {...register(name+`.${index}.learnMore`)} placeholder="Title" />
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
export default RadiologySolutionsSectionAccordion;