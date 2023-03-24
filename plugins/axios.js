export default ({ $axios, env }) => {
    // $axios.setHeader('Authorization', `Bearer ${env.supabaseApiKey}`)
    $axios.setHeader('apikey', env.supabaseApiKey)
}