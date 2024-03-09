import { Form, useActionData, useNavigate } from "react-router-dom"
import { uploadRandomPost } from "../services/api"
import { useEffect } from "react"
import type { Post } from "../types"
import SubmitButton from "../components/SubmitButton"

export default function NewPost () {
  const navigate = useNavigate()
  const post = useActionData() as Post
  console.log(post)

  useEffect(() => {
    if (!post?.id) return
    navigate(`/post/${post.id}`)
  }, [post])
  return (
    <main className="px-10 py-5">
      <Form method='POST' className="flex flex-col max-w-[600px] w-auto mx-auto" >
        <input
          placeholder='Title'
          className='bg-stone-50/90 border border-stone-300 py-3 px-3 text-stone-950'
          name='title'
          required
          />
        <textarea
          placeholder='Body'
          rows={10}
          className='bg-stone-50/90 border border-stone-300 py-3 px-3 text-stone-950'
          name='body'
          required
          />
        <SubmitButton>Send</SubmitButton>
      </Form>
    </main>
  )
}

export const action = async ({ request }: { request: any }) => {
  const formData = await request.formData()
  const title = formData.get('title')
  const body = formData.get('body')
  // TODO: redirect to post/:id,
  // (id comes from api)
  const newPost = uploadRandomPost({ title, body })
  return newPost
}
