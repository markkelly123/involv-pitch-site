import Link from 'next/link'
import { useRouter } from 'next/router'

interface PitchNavigationProps {
  prevPage?: {
    href: string
    label: string
  }
  nextPage?: {
    href: string
    label: string
  }
}

const PitchNavigation = ({ prevPage, nextPage }: PitchNavigationProps) => {
  const router = useRouter()

  const pitchPages = [
    { href: '/', label: 'Hero' },
    { href: '/problem', label: 'Problem' },
    { href: '/solution', label: 'Solution' },
    { href: '/market', label: 'Market' },
    { href: '/business-model', label: 'Business Model' },
    { href: '/traction', label: 'Traction' },
    { href: '/competition', label: 'Competition' },
    { href: '/go-to-market', label: 'Go-to-Market' },
    { href: '/financials', label: 'Financials' },
    { href: '/team', label: 'Team' },
    { href: '/funding', label: 'Funding' }
  ]

  // Find current page index
  const currentPageIndex = pitchPages.findIndex(page => page.href === router.pathname)
  
  // Auto-generate prev/next if not provided
  const autoPropsMode = !prevPage && !nextPage
  
  const finalPrevPage = autoPropsMode && currentPageIndex > 0 
    ? pitchPages[currentPageIndex - 1] 
    : prevPage

  const finalNextPage = autoPropsMode && currentPageIndex < pitchPages.length - 1 
    ? pitchPages[currentPageIndex + 1] 
    : nextPage

  return (
    <div className="fixed bottom-8 left-8 right-8 z-40 pointer-events-none">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Back Button */}
        <div className="pointer-events-auto">
          {finalPrevPage ? (
            <Link
              href={finalPrevPage.href}
              className="inline-flex items-center px-6 py-3 bg-gray-700 text-white font-medium rounded-lg shadow-lg hover:bg-gray-800 hover:shadow-xl transition-all duration-200"
            >
              <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </Link>
          ) : (
            <div></div> // Empty div to maintain flexbox layout
          )}
        </div>

        {/* Page Progress Indicator */}
        <div className="pointer-events-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg border border-gray-200">
            <div className="text-sm text-gray-600 text-center">
              {currentPageIndex + 1} of {pitchPages.length}
            </div>
            <div className="mt-1 w-24 h-1 bg-gray-200 rounded-full">
              <div 
                className="h-1 bg-[#66899b] rounded-full transition-all duration-300"
                style={{ width: `${((currentPageIndex + 1) / pitchPages.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Next Button */}
        <div className="pointer-events-auto">
          {finalNextPage ? (
            <Link
              href={finalNextPage.href}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-200"
            >
              Next
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ) : (
            <div></div> // Empty div to maintain flexbox layout
          )}
        </div>
      </div>
    </div>
  )
}

export default PitchNavigation