const apiUrl = process.env.NEXT_PUBLIC_API_URL;
export const getDoctorList = async (search, pageNumber, perPageSize, sortCol, sortOrd) => {
    const res = await fetch(apiUrl+`/doctors-list?search=${search}&page=${pageNumber}&limit=${perPageSize}&sortColumn=${sortCol}&sortOrder=${sortOrd}`, {credentials: 'include'});
    return res.json();
};

export const getDoctorListById = async (id) => {
    const res = await fetch(`${apiUrl}/doctors-list/${id}`, {credentials: 'include'})
    return res.json();
};
export const createDoctor = async (data) => {
    const formData = new FormData();

  // Append fields to FormData
  formData.append("name", data.name);
  formData.append("email", data.email);
  formData.append("mobile", data.mobile);
  formData.append("degree", data.degree);
  formData.append("speciality", data.speciality);
  formData.append("languages", data.languages);
  formData.append("gender", data.gender);
  formData.append("description", data.description);
  formData.append("longDescription", data.longDescription);
  formData.append("isActive", data.isActive);

  // Append profile photo if selected
    if (data.profilePhoto && data.profilePhoto.length > 0) {
        formData.append("file", data.profilePhoto[0]);
    }
    const res = await fetch(`${apiUrl}/doctors-list/create`, {
        method: 'POST',
        credentials: 'include',
        body: formData
    })
    return res.json();
};
export const updateDoctor = async (id, data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("mobile", data.mobile);
    formData.append("degree", data.degree);
    formData.append("speciality", data.speciality);
    formData.append("languages", data.languages);
    formData.append("gender", data.gender);
    formData.append("description", data.description);
    formData.append("longDescription", data.longDescription);
    formData.append("isActive", data.isActive);

    if (data.profilePhoto && data.profilePhoto.length > 0) {
        formData.append("file", data.profilePhoto[0]);
    }
    const res = await fetch(`${apiUrl}/doctors-list/update/${id}`, {
        method: 'PUT', 
        credentials: 'include',
        body: formData
    })
    return res.json();
};
export const deleteDoctorList = async (id) => {
    const res = await fetch(`${apiUrl}/doctors-list/delete/${id}`, {
        method: 'DELETE',
        credentials: 'include',
    })
    return res.json();
};