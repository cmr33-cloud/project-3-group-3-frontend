
export default function Logout() {

    localStorage.removeItem('token');
    return window.location.href = './'
}
