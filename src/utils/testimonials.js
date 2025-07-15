const apiUrl = process.env.NEXT_PUBLIC_API_URL;
export const getTestimonials = async (search, pageNumber, perPageSize, sortCol, sortOrd) => {
    const res = await fetch(apiUrl+`/testimonials?search=${search}&page=${pageNumber}&limit=${perPageSize}&sortColumn=${sortCol}&sortOrder=${sortOrd}`, {credentials: 'include'});
    return res.json();
};
export const getTestimonialById = async (id) => {
    const res = await fetch(`${apiUrl}/testimonials/${id}`, {credentials: 'include'})
    return res.json();
};
export const createTestimonial = async (data) => {
    const formData = new FormData();
  // Append fields to FormData
  formData.append("title", data.title);
  formData.append("description", data.description);
  data.categories.forEach((category) => {
    formData.append("categories", category);
  });
  formData.append("type", data.type);
  formData.append("order", data.order);

  if (data.type == 'image') {
    // Append profile photo if selected
    if (data.testimonialPhoto && data.testimonialPhoto.length > 0) {
        formData.append("file", data.testimonialPhoto[0]);
    }
  }

  if (data.type == 'video') {
    // Append profile photo if selected
    if (data.testimonialVideo && data.testimonialVideo.length > 0) {
        formData.append("video", data.testimonialVideo[0]);
    }
    if (data.testimonialVideoPoster && data.testimonialVideoPoster.length > 0) {
        formData.append("videoPoster", data.testimonialVideoPoster[0]);
    }
  }
    const res = await fetch(`${apiUrl}/testimonials/create`, {
        method: 'POST',
        credentials: 'include',
        body: formData
    })
    return res.json();
};
export const updateTestimonial = async (id, data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    data.categories.forEach((category) => {
      formData.append("categories", category);
    });
    formData.append("type", data.type);
    formData.append("order", data.order);
    formData.append("slug", data.slug);

    if (data.type == 'image') {
    // Append profile photo if selected
        if (data.testimonialPhoto && data.testimonialPhoto.length > 0) {
            formData.append("file", data.testimonialPhoto[0]);
        }
    }

    if (data.type == 'video') {
        // Append profile photo if selected
        if (data.testimonialVideo && data.testimonialVideo.length > 0) {
            formData.append("video", data.testimonialVideo[0]);
        }
        if (data.testimonialVideoPoster && data.testimonialVideoPoster.length > 0) {
            formData.append("videoPoster", data.testimonialVideoPoster[0]);
        }
    }
    const res = await fetch(`${apiUrl}/testimonials/update/${id}`, {
        method: 'PUT', 
        credentials: 'include',
        body: formData
    })
    return res.json();
};
export const deleteTestimonial = async (id) => {
    const res = await fetch(`${apiUrl}/testimonials/delete/${id}`, {
        method: 'DELETE',
        credentials: 'include',
    })
    return res.json();
};
