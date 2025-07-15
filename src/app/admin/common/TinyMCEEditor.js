import { useEffect, useRef } from "react";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const uploadsUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export default function TinyMCEEditor({ value, onChange }) {
    const editorRef = useRef(null);

    useEffect(() => {
        // Dynamically load TinyMCE
        const example_image_upload_handler = (blobInfo, progress) => new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.withCredentials = true;
            xhr.open('POST', apiUrl+"/upload_image");
          
            xhr.upload.onprogress = (e) => {
              progress(e.loaded / e.total * 100);
            };
          
            xhr.onload = () => {
              if (xhr.status === 403) {
                reject({ message: 'HTTP Error: ' + xhr.status, remove: true });
                return;
              }
          
              if (xhr.status < 200 || xhr.status >= 300) {
                reject('HTTP Error: ' + xhr.status);
                return;
              }
          
              const json = JSON.parse(xhr.responseText);
          
              if (!json || typeof json.location != 'string') {
                reject('Invalid JSON: ' + xhr.responseText);
                return;
              }
              var location_url = json.location;

              resolve(uploadsUrl+'/'+location_url);
            };
          
            xhr.onerror = () => {
              reject('Image upload failed due to a XHR Transport error. Code: ' + xhr.status);
            };
          
            const formData = new FormData();
            formData.append('file', blobInfo.blob(), blobInfo.filename());
          
            xhr.send(formData);
          });
        const script = document.createElement("script");
        script.src = "/assets/js/vendor/tinymce/tinymce.min.js";
        script.referrerPolicy = "origin";
        script.onload = () => {
            // Initialize TinyMCE when script is loaded
            window.tinymce.init({
                selector: "#editor",
                height: 400,
                menubar: true,
                plugins: "code advlist autolink lists link image charmap preview anchor media",
                toolbar:
                    "undo redo | formatselect | bold italic | alignleft aligncenter alignright alignjustify | outdent indent | code",
                extended_valid_elements: "script[src|async|defer|type|charset]",
                valid_children: "+body[script],+body[video],+body[audio]",
                valid_elements: "*[*]",
                content_css: "/assets/css/bootstrap.min.css,/assets/css/custom.css,/assets/css/responsive.css,/assets/css/extra.css",
                allow_script_urls: true,
                images_upload_url: apiUrl+"/upload_image", // API to handle image uploads
                images_upload_handler: example_image_upload_handler,
                setup: (editor) => {
                    editor.on("change", () => onChange(editor.getContent()));
                },
                
            });
        };
        document.body.appendChild(script);

        return () => {
            // Cleanup on unmount
            if (window.tinymce) {
                window.tinymce.remove();
            }
        };
    }, [onChange]);

    return <textarea id="editor" ref={editorRef} defaultValue={value}></textarea>;
}
