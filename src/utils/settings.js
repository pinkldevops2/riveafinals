const apiUrl = process.env.NEXT_PUBLIC_API_URL;
export const getSettingsByType = async (type) => {
    const res = await fetch(`${apiUrl}/settings/type/${type}`, {credentials: 'include'})
    return res.json();
};

export const updateSettings = async (id, data) => {
    const res = await fetch(`${apiUrl}/settings/update/${id}`, {
        method: 'PUT', 
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    return res.json();
};

export const createSettings = async (data) => {
    const formData = new FormData();

  // Append fields to FormData
  formData.append("type", data.type);
  formData.append("settingData", data.settingData);
    const res = await fetch(`${apiUrl}/settings/create`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    return res.json();
};