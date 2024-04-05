'use server'

import { cookies } from 'next/headers'

export async function CreateCookie() {
  const cookieStore = await cookies()
  cookieStore.set('tourpopup', 'true')
}

export async function SetCookie() {
  const cookieStore = await cookies()
  const hasCookie = cookieStore.has('tourpopup')
  return hasCookie
}
