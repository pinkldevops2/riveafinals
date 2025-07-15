const apiUrl = process.env.NEXT_PUBLIC_API_URL;
export const getPageList = async (search, pageNumber, perPageSize, sortCol, sortOrd) => {
    const res = await fetch(apiUrl+`/pages?search=${search}&page=${pageNumber}&limit=${perPageSize}&sortColumn=${sortCol}&sortOrder=${sortOrd}`, {credentials: 'include'});
    return res.json();
};

export const getPageById = async (id) => {
    const res = await fetch(`${apiUrl}/pages/${id}`, {credentials: 'include'})
    return res.json();
};

export const getBySlug = async (slug) => {
    const res = await fetch(`${apiUrl}/pages/slug/${slug}`, {credentials: 'include'})
    return res.json();
};

export const createPage = async (data) => {
    const res = await fetch(`${apiUrl}/pages/create`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    return res.json();
};
export const updatePage = async (id, data) => {
    const res = await fetch(`${apiUrl}/pages/update/${id}`, {
        method: 'PUT', 
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    return res.json();
};

export const deletePage = async (id) => {
    const res = await fetch(`${apiUrl}/pages/delete/${id}`, {
        method: 'DELETE',
        credentials: 'include',
    })
    return res.json();
};