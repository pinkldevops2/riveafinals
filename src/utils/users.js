const apiUrl = process.env.NEXT_PUBLIC_API_URL;
export const getUserList = async (pageNumber, perPageSize, sortCol, sortOrd) => {
    const res = await fetch(apiUrl+`/users?page=${pageNumber}&limit=${perPageSize}&sortColumn=${sortCol}&sortOrder=${sortOrd}`, {credentials: 'include'});
    return res.json();
};

export const getUserListById = async (id) => {
    const res = await fetch(`${apiUrl}/users/${id}`, {credentials: 'include'})
    return res.json();
};
export const createUser = async (data) => {
    const formData = new FormData();

  // Append fields to FormData
  formData.append("username", data.username);
  formData.append("email", data.email);
  formData.append("new_password", data.new_password);
  
  // Append profile photo if selected
    if (data.profilePhoto && data.profilePhoto.length > 0) {
        formData.append("file", data.profilePhoto[0]);
    }
    const res = await fetch(`${apiUrl}/users/create`, {
        method: 'POST',
        credentials: 'include',
        body: formData
    })
    return res.json();
};
export const updateUser = async (id, data) => {
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("email", data.email);
    formData.append("new_password", data.new_password);

    if (data.profilePhoto && data.profilePhoto.length > 0) {
        formData.append("file", data.profilePhoto[0]);
    }
    const res = await fetch(`${apiUrl}/users/update/${id}`, {
        method: 'PUT', 
        credentials: 'include',
        body: formData
    })
    return res.json();
};
export const deleteUserList = async (id) => {
    const res = await fetch(`${apiUrl}/users/delete/${id}`, {
        method: 'DELETE',
        credentials: 'include',
    })
    return res.json();
};