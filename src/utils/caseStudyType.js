const apiUrl = process.env.NEXT_PUBLIC_API_URL;
export const getCSType = async (search, pageNumber, perPageSize, sortCol, sortOrd) => {
    const res = await fetch(apiUrl+`/case-study-type?search=${search}&page=${pageNumber}&limit=${perPageSize}&sortColumn=${sortCol}&sortOrder=${sortOrd}`, {credentials: 'include'});
    return res.json();
};

export const getCSTypeById = async (id) => {
    const res = await fetch(`${apiUrl}/case-study-type/${id}`, {credentials: 'include'})
    return res.json();
};
export const createCSType = async (data) => {
    const res = await fetch(`${apiUrl}/case-study-type/create`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    return res.json();
};
export const updateCSType = async (id, data) => {
    const res = await fetch(`${apiUrl}/case-study-type/update/${id}`, {
        method: 'PUT', 
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    return res.json();
};
export const deleteCSType = async (id) => {
    const res = await fetch(`${apiUrl}/case-study-type/delete/${id}`, {
        method: 'DELETE',
        credentials: 'include',
    })
    return res.json();
};

export const getAllCSType = async (id) => {
    const res = await fetch(`${apiUrl}/all-case-study-type`)
    return res.json();
};