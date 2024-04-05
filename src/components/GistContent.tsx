import { BundledLanguage, getHighlighter } from 'shiki'
import { CodePreview } from './CodePreview'
interface GistContentProps {
  gistUrl: string
  language: BundledLanguage
}

export async function GistContent({ gistUrl, language }: GistContentProps) {
  const settingsResponse = await fetch(gistUrl)
  const settings = await settingsResponse.text()

  const highlighter = await getHighlighter({
    themes: ['rose-pine-moon'],
    langs: [language],
  })

  const code = highlighter.codeToHtml(settings, {
    theme: 'rose-pine-moon',
    lang: language,
  })
  return <CodePreview code={code} raw={settings} />
}
