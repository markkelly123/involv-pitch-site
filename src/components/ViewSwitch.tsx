import { ReactNode } from 'react'
import { useRouter } from 'next/router'

function useView() {
  const { query } = useRouter()
  return query.view === 'detailed' ? 'detailed' : 'summary'
}

export function SummaryView({ children }: { children: ReactNode }) {
  return useView() === 'summary' ? <>{children}</> : null
}

export function DetailedView({ children }: { children: ReactNode }) {
  return useView() === 'detailed' ? <>{children}</> : null
}