const apiUrl = process.env.NEXT_PUBLIC_API_URL;
export const getNews = async (search, pageNumber, perPageSize, sortCol, sortOrd) => {
    const res = await fetch(apiUrl+`/news?search=${search}&page=${pageNumber}&limit=${perPageSize}&sortColumn=${sortCol}&sortOrder=${sortOrd}`, {credentials: 'include'});
    return res.json();
};

export const getNewsById = async (id) => {
    const res = await fetch(`${apiUrl}/news/${id}`, {credentials: 'include'})
    return res.json();
};
export const createNews = async (data) => {
    const formData = new FormData();

  // Append fields to FormData
  formData.append("name", data.name);
  formData.append("title", data.title);
  data.categories.forEach((category) => {
    formData.append("categories", category);
  });
  formData.append("order", data.order);
  formData.append("description", data.description);
  formData.append("metaTitle", data.metaTitle);
  formData.append("metaDescription", data.metaDescription);

  // Append profile photo if selected
    if (data.profilePhoto && data.profilePhoto.length > 0) {
        formData.append("file", data.profilePhoto[0]);
    }
    const res = await fetch(`${apiUrl}/news/create`, {
        method: 'POST',
        credentials: 'include',
        body: formData
    })
    return res.json();
};
export const updateNews = async (id, data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("title", data.title);
    data.categories.forEach((category) => {
      formData.append("categories", category);
    });
    formData.append("order", data.order);
    formData.append("slug", data.slug);
    formData.append("description", data.description);
    formData.append("metaTitle", data.metaTitle);
    formData.append("metaDescription", data.metaDescription);

    if (data.profilePhoto && data.profilePhoto.length > 0) {
        formData.append("file", data.profilePhoto[0]);
    }
    const res = await fetch(`${apiUrl}/news/update/${id}`, {
        method: 'PUT', 
        credentials: 'include',
        body: formData
    })
    return res.json();
};
export const deleteNews = async (id) => {
    const res = await fetch(`${apiUrl}/news/delete/${id}`, {
        method: 'DELETE',
        credentials: 'include',
    })
    return res.json();
};
