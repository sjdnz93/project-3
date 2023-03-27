import { Buffer } from 'buffer'
import axios from 'axios'

const tokenName = 'HAGL-TOKEN'

export const getPayload = () => {
  const token = localStorage.getItem(tokenName) 
  if (!token) return
  const splitToken = token.split('.') 
  const payloadString = splitToken[1]
  return JSON.parse(Buffer.from(payloadString, 'base64'))
}


export const isAuthenticated = () => {
  const payload = getPayload() 
  if (!payload) return false
  const currentTime = Date.now() / 1000
  return currentTime < payload.exp 
}

export const removeToken = () => {
  localStorage.removeItem(tokenName)
}

export const getToken = () => {
  return localStorage.getItem(tokenName)
}

export const authenticated = axios.create({
  baseURL: '/api',
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
})

export const userIsOwner = (item) => {
  const payload = getPayload()
  if (!payload) return
  if (item){
    return payload.sub === item.addedBy._id
  }
}