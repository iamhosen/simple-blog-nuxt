export const state = () => ({
    user: null,
    token: null,
    loggedIn: false
})

export const getters = {
    user: state => state.user,
    token: state => state.token,
    isAuthenticated: state => state.loggedIn
}

export const mutations = {
    setUser(state, user) {
        state.user = user
    },
    setToken(state, token) {
        state.token = token
    },
    setLoggedIn(state, loggedIn) {
        state.loggedIn = loggedIn
    }
}

export const actions = {
    async register({ commit }, user) {
        try {
            const { data, error } = await this.$supabase.auth.signUp(user);

            if (error) {
                throw new Error(error.message)
            }

            return "You have successfully registered! \n Please check your email to verify your account."

        } catch (error) {
            console.error(error);
            return "There is an error"
        }
    },

    async login({ commit }, user) {
        try {
            const { data, error } = await this.$supabase.auth.signInWithPassword(user);

            if (error) {
                throw new Error(error.message)
            }

            commit('setUser', data.user)
            commit('setToken', data.session.access_token)
            commit('setLoggedIn', true)

            localStorage.setItem('token', data.session.access_token)
            localStorage.setItem('expiresAt', data.session.expires_at)

            this.$axios.setHeader('Authorization', `Bearer ${data.session.access_token}`)


            console.log(data);
        } catch (error) {
            console.error(error);
        }
    },

    async tryLogin({ commit, dispatch }) {
        const token = localStorage.getItem('token')
        const expiresAt = localStorage.getItem('expiresAt') * 1000

        if (expiresAt < new Date().getTime()) {

            await dispatch('logout')

            return this.$router.push('/auth/login')
        }

        this.$axios.setHeader('Authorization', `Bearer ${token}`)
        await this.$axios.$get('/auth/v1/user').then(user => commit('setUser', user))

        commit('setToken', token)
        commit('setLoggedIn', true)
    },

    async logout({ commit }) {
        await this.$axios.$post('/auth/v1/logout')
            .then(res => console.log(res))
            .catch(err => console.log(err))

        localStorage.removeItem('token')
        localStorage.removeItem('expiresAt')

        commit('setUser', null)
        commit('setToken', null)
        commit('setLoggedIn', false)

        this.$router.push('/auth/login')
    }
}