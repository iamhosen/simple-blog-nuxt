export default function ({ redirect, route, store }) {
    console.log('AUTH MIDDLEWARE');
    const token = localStorage.getItem('token')
    const expiresAt = localStorage.getItem('expiresAt') * 1000


    if (!token && route.path !== '/auth/login' && route.path !== '/auth/register') {
        return redirect('/auth/login')
    }

    if (token || (expiresAt && expiresAt < new Date().getTime())) {
        store.dispatch('auth/tryLogin')
    }
}