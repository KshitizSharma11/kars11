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


export const handleEmailLogin = async (email:string, password:string) => {
  const { user, error } = await supabase.auth.signInWithIdToken({
    email: email,
    password: password,
  });

  if (error) {
    console.error('Error logging in with email/password:', error.message);
  } else {
    console.log('Logged in user:', user);
  }
};
