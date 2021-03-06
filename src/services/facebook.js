/* globals FB */

export const init = () => {
  const APP_ID = process.env.FB_APP_ID
  FB.init({
    appId: APP_ID,
    cookie: true,
    xfbml: false,
    version: 'v2.12'
  })
}

export const getLoginStatus = () => new Promise(resolve => FB.getLoginStatus(res => resolve(res.status)))

export const login = () => {
  const scopes = [
    'public_profile', 'email', 'user_birthday',
    'user_friends', 'user_location', 'user_likes',
    'user_posts'
  ]
  const scope = {
    scope: scopes.join(','),
    return_scopeds: true
  }
  return new Promise(resolve => FB.login(resolve, scope))
}

export const logout = () => new Promise(resolve => FB.logout(resp => resolve(resp)))

export const getEmail = () => new Promise(resolve => FB.api('/me', (res) => {
  const username = res.email || res.name
  return resolve(username)
}))

export const getAccessToken = () => Promise.resolve(FB.getAccessToken())
