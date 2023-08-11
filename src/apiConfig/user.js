import api from './api.js';
// import jwtDecode from 'jwt-decode'

const getToken = () => {
  return new Promise(resolve => {
      resolve(`Token ${localStorage.getItem('token') || null}`)
  })
}

export const signUp = async (credentials) => {
  try {
    const resp = await api.post('/users/signup', credentials)
    localStorage.setItem('token', resp.data.token)
    const user = resp.data.token
    return user
  } catch (error) {
    throw error
  }
}

export const signIn = async (credentials) => {
  try {
    const resp = await api.post('/users/login', credentials)
    localStorage.setItem('token', resp.data.token)
    const user = resp.data.token
    return user
  } catch (error) {
    throw error
  }
}

export const signOut = async () => {
  try {
    localStorage.removeItem("token")
    return true
  } catch (error) {
    throw error
  }
}

export const getUser = async () => {
  try {
    let token = await getToken();

    if (token === "Token null") {
      return null
    }

    console.log(token)

    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token,
    }

    const response = await api.get("/users/${id}", { headers });
    console.log(response)
    return response.data;
  }catch (error) {
    throw error;
  }
}

// export const verifyUser = async () => {
//   const token = localStorage.getItem('token')
//   if (token) {
//     const res = await api.get('/verify')
//     return res.data
//   }
//   return false
// }