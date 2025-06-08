import { NextPage, GetStaticProps } from 'next'
import fs from 'fs'
import path from 'path'
import { useEffect, useRef } from 'react'

interface HomeProps {
  html: string
}

const Home: NextPage<HomeProps> = ({ html }) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return
    const scripts = Array.from(container.querySelectorAll('script'))
    scripts.forEach(old => {
      const script = document.createElement('script')
      if (old.src) script.src = old.src
      if (old.textContent) script.textContent = old.textContent
      old.parentNode?.removeChild(old)
      document.body.appendChild(script)
    })
  }, [])

  return <div ref={ref} dangerouslySetInnerHTML={{ __html: html }} />
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const filePath = path.join(process.cwd(), 'public', 'landing.html')
  const html = fs.readFileSync(filePath, 'utf8')
  return { props: { html } }
}

export default Home
