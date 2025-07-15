const apiUrl = process.env.NEXT_PUBLIC_API_URL;
export const getGallery = async (pageNumber, perPageSize, sortCol, sortOrd) => {
    const res = await fetch(apiUrl+`/gallery?page=${pageNumber}&limit=${perPageSize}&sortColumn=${sortCol}&sortOrder=${sortOrd}`, {credentials: 'include'});
    return res.json();
};
export const getGalleryById = async (id) => {
    const res = await fetch(`${apiUrl}/gallery/${id}`, {credentials: 'include'})
    return res.json();
};
export const createGallery = async (data) => {
    const formData = new FormData();
  // Append fields to FormData
  formData.append("type", data.type);
  formData.append("order", data.order);

  if (data.type == 'image') {
    // Append profile photo if selected
    if (data.galleryPhoto && data.galleryPhoto.length > 0) {
        formData.append("file", data.galleryPhoto[0]);
    }
  }

  if (data.type == 'video') {
    // Append profile photo if selected
    if (data.galleryVideo && data.galleryVideo.length > 0) {
        formData.append("video", data.galleryVideo[0]);
    }
    if (data.galleryVideoPoster && data.galleryVideoPoster.length > 0) {
        formData.append("videoPoster", data.galleryVideoPoster[0]);
    }
  }
    const res = await fetch(`${apiUrl}/gallery/create`, {
        method: 'POST',
        credentials: 'include',
        body: formData
    })
    return res.json();
};
export const updateGallery = async (id, data) => {
    const formData = new FormData();
    formData.append("type", data.type);
    formData.append("order", data.order);
console.log('-11->',data);
    if (data.type == 'image') {
    // Append profile photo if selected
        if (data.galleryPhoto && data.galleryPhoto.length > 0) {
            formData.append("file", data.galleryPhoto[0]);
        }
    }

    if (data.type == 'video') {
        // Append profile photo if selected
        if (data.galleryVideo && data.galleryVideo.length > 0) {
            formData.append("video", data.galleryVideo[0]);
        }
        if (data.galleryVideoPoster && data.galleryVideoPoster.length > 0) {
            formData.append("videoPoster", data.galleryVideoPoster[0]);
        }
    }
    const res = await fetch(`${apiUrl}/gallery/update/${id}`, {
        method: 'PUT', 
        credentials: 'include',
        body: formData
    })
    return res.json();
};
export const deleteGallery = async (id) => {
    const res = await fetch(`${apiUrl}/gallery/delete/${id}`, {
        method: 'DELETE',
        credentials: 'include',
    })
    return res.json();
};
