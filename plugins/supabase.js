import { createClient } from '@supabase/supabase-js'

export default ({ env }, inject) => {
    const supabase = createClient(env.supabaseUrl, env.supabaseApiKey)

    inject('supabase', supabase)
}