import type { SubmittedPost } from "../types"

const API_URL = 'http://localhost:8001/api/v1/posts'

const getRandomPost = () => {
  return fetch(API_URL)
    .then((res) => {
      if (!res.ok) throw new Error('Error fetching')
      return res.json()
    })
    .catch(() => {
      throw new Error('Error fetching')
    })
}

export const uploadRandomPost = ({ title, body }: SubmittedPost) => {
  const post = { title, body }
  return fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(post)
  })
    .then((res) => {
      if (!res.ok) throw new Error('Error posting')
      return res.json()
    })
    .catch(() => {
      throw new Error('Error posting')
    })
}