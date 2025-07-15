const apiUrl = process.env.NEXT_PUBLIC_API_URL;
export const getCaseStudies = async (search, pageNumber, perPageSize, sortCol, sortOrd) => {
    const res = await fetch(apiUrl+`/case-studies?search=${search}&page=${pageNumber}&limit=${perPageSize}&sortColumn=${sortCol}&sortOrder=${sortOrd}`, {credentials: 'include'});
    return res.json();
};
export const getCaseStudyById = async (id) => {
    const res = await fetch(`${apiUrl}/case-studies/${id}`, {credentials: 'include'})
    return res.json();
};
export const createCaseStudy = async (data) => {
    const formData = new FormData();
    // Append fields to FormData
    formData.append("title", data.title);
    formData.append("subTitle", data.subTitle);
    formData.append("description", data.description);
    formData.append("metaTitle", data.metaTitle);
    formData.append("metaDescription", data.metaDescription);
    formData.append("typeId", data.typeId);
    formData.append("categoryId", data.categoryId);
    formData.append("order", data.order);

    // Append profile photo if selected
    if (data.photo && data.photo.length > 0) {
        formData.append("file", data.photo[0]);
    }

    const res = await fetch(`${apiUrl}/case-studies/create`, {
        method: 'POST',
        credentials: 'include',
        body: formData
    })
    return res.json();
};
export const updateCaseStudy = async (id, data) => {
    const formData = new FormData();
    // Append fields to FormData
    formData.append("title", data.title);
    formData.append("subTitle", data.subTitle);
    formData.append("description", data.description);
    formData.append("metaTitle", data.metaTitle);
    formData.append("metaDescription", data.metaDescription);
    formData.append("typeId", data.typeId);
    formData.append("categoryId", data.categoryId);
    formData.append("order", data.order);

    // Append profile photo if selected
    if (data.photo && data.photo.length > 0) {
        formData.append("file", data.photo[0]);
    }
    formData.append("slug", data.slug);

    const res = await fetch(`${apiUrl}/case-studies/update/${id}`, {
        method: 'PUT', 
        credentials: 'include',
        body: formData
    })
    return res.json();
};
export const deleteCaseStudy = async (id) => {
    const res = await fetch(`${apiUrl}/case-studies/delete/${id}`, {
        method: 'DELETE',
        credentials: 'include',
    })
    return res.json();
};
