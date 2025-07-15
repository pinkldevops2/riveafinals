const apiUrl = process.env.NEXT_PUBLIC_API_URL;
export const getCategories = async (search, pageNumber, perPageSize, sortCol, sortOrd) => {
    const res = await fetch(apiUrl+`/case-study-category?search=${search}&page=${pageNumber}&limit=${perPageSize}&sortColumn=${sortCol}&sortOrder=${sortOrd}`, {credentials: 'include'});
    return res.json();
};

export const getCategoryById = async (id) => {
    const res = await fetch(`${apiUrl}/case-study-category/${id}`, {credentials: 'include'})
    return res.json();
};
export const createCategory = async (data) => {
    const formData = new FormData();

    // Append fields to FormData
    formData.append("typeId", data.typeId);
    formData.append("name", data.name);
    formData.append("order", data.order);
    formData.append("description", data.description);

    const res = await fetch(`${apiUrl}/case-study-category/create`, {
        method: 'POST',
        credentials: 'include',
        body: formData
    })
    return res.json();
};
export const updateCategory = async (id, data) => {
    const formData = new FormData();
    formData.append("typeId", data.typeId);
    formData.append("name", data.name);
    formData.append("order", data.order);
    formData.append("description", data.description);

    const res = await fetch(`${apiUrl}/case-study-category/update/${id}`, {
        method: 'PUT', 
        credentials: 'include',
        body: formData
    })
    return res.json();
};
export const deleteCategory = async (id) => {
    const res = await fetch(`${apiUrl}/case-study-category/delete/${id}`, {
        method: 'DELETE',
        credentials: 'include',
    })
    return res.json();
};
export const getAllCSType = async (id) => {
    const res = await fetch(`${apiUrl}/all-case-study-type`)
    return res.json();
};

export const getCSCategorybyType = async (typeId) => {
    const res = await fetch(`${apiUrl}/case-study-category-by-type/${typeId}`, {credentials: 'include'})
    return res.json();
};