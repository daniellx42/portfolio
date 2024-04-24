'use server'

import { cookies } from 'next/headers'

export async function CreateCookie() {
  cookies().set('tourpopup', 'true')
}

export async function SetCookie() {
  const cookieStore = cookies()
  const hasCookie = cookieStore.has('tourpopup')
  return hasCookie
}
