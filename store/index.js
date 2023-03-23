export const state = () => ({
    posts: []
})

export const getters = {
    getPosts: state => state.posts,
    getPostById: state => id => state.posts.find(post => post.id == id)

}

export const mutations = {
    setPosts(state, posts) {
        state.posts = posts
    },

    addPost(state, post) {
        state.posts.push(post)
    },

    removePost(state, id) {
        state.posts = state.posts.filter(post => post.id !== id)
    }
}

export const actions = {
    async fetchPosts({ commit }) {
        await this.$axios
            .get("/posts")
            .then(res => commit("setPosts", res.data))
            .catch(err => console.log(err))

    },

    async createPost({ commit }, post) {
        await this.$axios
            .post('/posts', post)
            .then(res => {
                commit("addPost", post)
            })
            .catch(err => console.log(err))
    },

    async deletePost({ commit, dispatch }, id) {
        commit("removePost", id);

        await this.$axios
            .delete(`/posts?id=eq.${id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))

        dispatch("fetchPosts")
    }


}