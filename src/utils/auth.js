import Cookies from 'js-cookie';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
export const login = async (email, password) => {
    const res = await fetch(apiUrl+'/auth/signin', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });
    return res.json();
};

export const logout = async () => {
    await fetch(apiUrl+'/auth/signout', { method: 'POST', credentials: 'include' });
    Cookies.remove('auth_token');
    localStorage.removeItem('userData');
};
export const checkUserLoggedIn = async () => {
    return localStorage.getItem('userData');
};
export const getProfile = async () => {
    const res = await fetch(apiUrl+'/auth/profile', { credentials: 'include' });
    return res.json();
};
