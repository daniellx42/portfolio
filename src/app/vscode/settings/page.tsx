import { GistContent } from '@/components/GistContent'

export const metadata = {
  title: 'VSCode Settings',
}

export default async function Settings() {
  return (
    <GistContent
      language="json"
      gistUrl="https://gist.githubusercontent.com/daniellx42/59c5e3f144a8530adcf059285f0ce868/raw/c0f3d8f14bc6f5b83f2ac79e4aae3e862c3a2a32/settings.json"
    />
  )
}
