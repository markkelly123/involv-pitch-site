// src/components/ViewLink.tsx
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

type ViewLinkProps = {
  /** Path to navigate to */
  href: string
  /** Inner content of the link */
  children: ReactNode
  /** Optional CSS classes */
  className?: string
}

export default function ViewLink({ href, children, className }: ViewLinkProps) {
  const { query } = useRouter()
  // If ?view=detailed is present, preserve it
  const view = query.view === 'detailed' ? 'detailed' : undefined

  return (
    <Link
      href={{
        pathname: href,
        query: view ? { view } : {}
      }}
      className={className}
    >
      {children}
    </Link>
  )
}
