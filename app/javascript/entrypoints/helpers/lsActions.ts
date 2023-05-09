
export const lsActions = {
    setRole: (role: string | null) => {
        return localStorage.setItem("role", JSON.stringify(role));
    },
    setUser: (user: string) => {
        return localStorage.setItem("user", JSON.stringify(user));
    },
    getUser: () => {
        return JSON.parse(localStorage.getItem('user'));
    },
 
    removeUser: () => localStorage.removeItem('user'),
    setToken: (tk: string) => {
       return localStorage.setItem("token", JSON.stringify(tk));
    },
    getToken: () => localStorage.getItem("token"),
    removeToken: () => localStorage.removeItem("token"),
}