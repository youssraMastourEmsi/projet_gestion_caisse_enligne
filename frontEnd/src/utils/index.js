const USER_KEY = 'user';

export const login = (data) => {
    localStorage.setItem(USER_KEY, JSON.stringify(data));
}

export const logout = () => {
    localStorage.removeItem(USER_KEY);
}

export const isLogin = () => {
    if (localStorage.getItem(USER_KEY)) {
        return true;
    }
    return false;
}

export const getRole = () => {
    return JSON.parse(localStorage.getItem(USER_KEY)).role;
}

export const getHome = () => {
    return JSON.parse(localStorage.getItem(USER_KEY)).role == 'admin' ? '/' : '/caisse';
}

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem(USER_KEY));
}

export const isRole = (role) => {
    var user_role = JSON.parse(localStorage.getItem(USER_KEY)).role;
    return user_role == role;
}