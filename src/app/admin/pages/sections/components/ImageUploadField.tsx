import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { toast } from "react-toastify";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const uploadsUrl = process.env.NEXT_PUBLIC_SERVER_URL;
const ImageUploadField = ({ name }: { name: string }) => {
  const { register, setValue , getValues} = useFormContext();
  const [uploading, setUploading] = useState(false);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);

    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch(apiUrl+"/upload_image", {
    method: 'POST',
    credentials: 'include',
    body: formData,
    }).then((response) => response.json())
    .then(data => {
          var result_data: any   = data;
          if(result_data.location){
            setValue(name, result_data.location);
          }
          setUploading(false);
        }).catch(err => {
          console.log("Error Reading data " + err);
          setUploading(false);
          toast.error("Invalid File.");
        });
  };

  return (
    <div>
      <input type="hidden" {...register(name)} />
      <div className="btn-main-box">
        <input type="file" className="file-input" accept="image/*" onChange={handleImageUpload} />
        <div className="btn-box">Upload Image</div>
      </div>
      {uploading ? (
        <p>Uploading...</p>
      ) : (
        <div className=""></div>
      )}
      <div className="image-preview">
        {getValues(name) && <img src={uploadsUrl+'/'+getValues(name)} alt="Profile Preview" className="mt-2" width={150} />}
      </div>
    </div>
  );
};
export default ImageUploadField;