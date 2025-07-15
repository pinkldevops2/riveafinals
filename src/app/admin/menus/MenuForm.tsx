import React, { useState, useEffect } from "react";
import TinyMCEEditor from '@/app/admin/common/TinyMCEEditor';
interface MenuFormProps {
    initialData?: Partial<any>
    onSubmit: (data: Partial<any>) => void
    isSubmitting: boolean
}

const MenuForm: React.FC<MenuFormProps> = ({ initialData, onSubmit, isSubmitting }) => {
    const [formData, setFormData] = useState<Partial<any>>({
        location: 'sidebar',
        title: '',
        url: '',
        targetWindow: false,
        targetColumn: '',
        order: 0,
        ...initialData
    })
    const [content, setContent] = useState("");
    useEffect(() => {
        if (initialData) {
            setFormData({
                ...initialData
            })
            setContent(formData.content);
        }
    }, [initialData])

    useEffect(() => {
        if (content) {
            setFormData({
                ...formData,
                ['content']: content
            })
        }
    }, [content])
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target

        if (type === 'checkbox') {
            const target = e.target as HTMLInputElement
            setFormData({
                ...formData,
                [name]: target.checked
            })
        } else {
            setFormData({
                ...formData,
                [name]: value
            })
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSubmit(formData)
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="location" className="form-label">Location *</label>
                <select className="form-control"
                    onChange={handleChange}
                   id="location"
                   name="location"
                   value={formData.location || ''}
                   >
                    <option value={'top'}>Top</option>
                    <option value={'sidebar'}>Sidebar</option>
                    <option value={'footer'}>Footer</option>
                </select>
            </div>
            {formData.location == 'footer' && (
                <div className="mb-3">
                    <label htmlFor="targetColumn" className="form-label">Column *</label>
                    <select className="form-control"
                        onChange={handleChange}
                    id="targetColumn"
                    name="targetColumn"
                    value={formData.targetColumn || ''}
                    >
                        <option value={'column1'}>Column 1</option>
                        <option value={'column2'}>Column 2</option>
                        <option value={'column3'}>Column 3</option>
                        <option value={'bottom_line'}>Bottom Line</option>
                    </select>
                </div>
            )}
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title *</label>
                <input
                   type="text"
                   className="form-control"
                   id="title"
                   name="title"
                   value={formData.title || ''}
                   onChange={handleChange}
                   required
                />
            </div>
            
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Url *</label>
                <input
                   type="text"
                   className="form-control"
                   id="url"
                   name="url"
                   value={formData.url || ''}
                   onChange={handleChange}
                   required
                />
            </div>
            
            <div className="row mb-3">
                <div className="col-md-12">
                    <label htmlFor="metaTitle" className="form-label">Sort Order</label>
                    <input 
                      type="number"
                      className="form-control"
                      id="order"
                      name="order"
                      value={formData.order || ''}
                      onChange={handleChange}
                    />  
                </div>
            </div>
            <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="targetWindow"
                  name="targetWindow"
                  checked={formData.targetWindow}
                  onChange={(e) => setFormData({...formData, targetWindow: e.target.checked})}
                />
                <label className="form-check-label" htmlFor="targetWindow">Open In New Window</label>     
            </div>
            <div className="mb-3">
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
                        'Save Menu'
                    )} 
                </button> 
                <a href="/admin/menus" className="btn btn-outline-secondary">
                   Cancel
                </a> 
            </div>
        </form>
    )
}

export default MenuForm