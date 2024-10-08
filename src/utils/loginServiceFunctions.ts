import { supabase } from './supaBaseClient'

export const handleFacebookLogin = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'facebook',
  })
  if (error) console.error('Error logging in with Facebook:', error.message)
}

export const handleGoogleLogin = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
  })
  if (error) console.error('Error logging in with Facebook:', error.message)
}


export async function signInWithEmail(email:string,password:string) {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      emailRedirectTo: 'https://localhost:3000/',
    },
  })
  if (error) {
    console.error('Error signing up:', error.message)
    throw error
  }
  else{
    console.log('User signed up successfully:', data)
  }

}

