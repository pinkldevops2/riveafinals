const apiUrl = process.env.NEXT_PUBLIC_API_URL;
export const getMenuList = async (activeTab, pageNumber, perPageSize, sortCol, sortOrd) => {
    const res = await fetch(apiUrl+'/menus?location='+activeTab+`&page=${pageNumber}&limit=${perPageSize}&sortColumn=${sortCol}&sortOrder=${sortOrd}`, {credentials: 'include'});
    return res.json();
};

export const getMenuById = async (id) => {
    const res = await fetch(`${apiUrl}/menus/${id}`, {credentials: 'include'})
    return res.json();
};

export const getBySlug = async (slug) => {
    const res = await fetch(`${apiUrl}/menus/slug/${slug}`, {credentials: 'include'})
    return res.json();
};

export const createMenu = async (data) => {
    const res = await fetch(`${apiUrl}/menus/create`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    return res.json();
};
export const updateMenu = async (id, data) => {
    const res = await fetch(`${apiUrl}/menus/update/${id}`, {
        method: 'PUT', 
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    return res.json();
};

export const deleteMenu = async (id) => {
    const res = await fetch(`${apiUrl}/menus/delete/${id}`, {
        method: 'DELETE',
        credentials: 'include',
    })
    return res.json();
};