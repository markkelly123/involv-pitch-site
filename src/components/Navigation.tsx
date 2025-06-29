import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'

type NavigationItem = {
  label: string
  href?: string
  items?: { label: string; href: string }[]
}

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [currentView, setCurrentView] = useState<'summary' | 'detailed'>('summary')
  const router = useRouter()

  // Initialize view from URL parameter
  useEffect(() => {
    const view = router.query.view as string
    setCurrentView(view === 'detailed' ? 'detailed' : 'summary')
  }, [router.query.view])

  const handleViewToggle = (view: 'summary' | 'detailed') => {
    setCurrentView(view)
    const newQuery = { ...router.query }
    if (view === 'detailed') {
      newQuery.view = 'detailed'
    } else {
      delete newQuery.view
    }
    
    router.push({
      pathname: router.pathname,
      query: newQuery
    }, undefined, { shallow: true })
  }

  const navigationItems: NavigationItem[] = [
    {
      label: 'Business',
      items: [
        { label: 'Problem', href: '/problem' },
        { label: 'Solution', href: '/solution' },
        { label: 'Market', href: '/market' }
      ]
    },
    {
      label: 'Strategy',
      items: [
        { label: 'Business Model', href: '/business-model' },
        { label: 'Competition', href: '/competition' },
        { label: 'Go-to-Market', href: '/go-to-market' }
      ]
    },
    {
      label: 'Performance',
      items: [
        { label: 'Traction', href: '/traction' },
        { label: 'Financials', href: '/financials' }
      ]
    },
    {
      label: 'Investment',
      items: [
        { label: 'Team', href: '/team' },
        { label: 'Funding', href: '/funding' }
      ]
    }
  ]

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label)
  }

  const closeDropdowns = () => {
    setOpenDropdown(null)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Links to Hero section */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo-involv.svg"
              alt="Involv"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation - Flex container for center alignment */}
          <div className="hidden md:flex items-center flex-1">
            {/* View Toggle Buttons with Download Button - Centered */}
            <div className="flex-1 flex justify-center items-center space-x-3">
              {/* Download Button */}
              <a
                href="/2506-involv-investor-pitch-deck.pdf"
                download="Involv-Investor-Pitch-Deck.pdf"
                className="flex items-center justify-center w-10 h-10 bg-white hover:bg-gray-50 text-blue-600 border border-gray-200 hover:border-blue-300 rounded-lg transition-colors duration-200 group"
                title="Download Investor Pitch Deck (PDF)"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </a>

              {/* View Toggle Buttons */}
              <div className="flex items-center bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => handleViewToggle('summary')}
                  className={`px-4 py-2 text-xs font-medium rounded-md transition-all duration-200 ${
                    currentView === 'summary'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-transparent text-gray-600 hover:text-gray-800'
                  }`}
                >
                  INVESTOR PACK
                </button>
                <button
                  onClick={() => handleViewToggle('detailed')}
                  className={`px-4 py-2 text-xs font-medium rounded-md transition-all duration-200 ${
                    currentView === 'detailed'
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'bg-transparent text-gray-600 hover:text-gray-800'
                  }`}
                >
                  ADD&apos;L DETAIL
                </button>
              </div>
            </div>

            {/* Dropdown Menus - All navigation items including Business */}
            <div className="flex items-center space-x-1">
              {navigationItems.map((item) => (
                item.href ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                      router.pathname === item.href
                        ? 'text-[#66899b] bg-gray-100'
                        : 'text-gray-700 hover:text-[#66899b] hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div key={item.label} className="relative">
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                        item.items?.some(subItem => router.pathname === subItem.href)
                          ? 'text-[#66899b] bg-gray-100'
                          : 'text-gray-700 hover:text-[#66899b] hover:bg-gray-50'
                      }`}
                    >
                      {item.label}
                      <svg
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                          openDropdown === item.label ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Dropdown Menu */}
                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1">
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            onClick={closeDropdowns}
                            className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                              router.pathname === subItem.href
                                ? 'text-[#66899b] bg-gray-100'
                                : 'text-gray-700 hover:text-[#66899b] hover:bg-gray-50'
                            }`}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#66899b] hover:bg-gray-100"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-2">
            {/* Mobile Download Button */}
            <div className="px-3 py-2">
              <a
                href="/2506-involv-investor-pitch-deck.pdf"
                download="Involv-Investor-Pitch-Deck.pdf"
                className="flex items-center justify-center w-full px-4 py-3 bg-white hover:bg-gray-50 text-blue-600 border border-gray-200 hover:border-blue-300 rounded-lg transition-colors duration-200 mb-3"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Pitch Deck
              </a>
            </div>

            {/* Mobile View Toggle */}
            <div className="px-3 py-2">
              <div className="text-xs font-medium text-gray-500 mb-2">VIEW MODE</div>
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => handleViewToggle('summary')}
                  className={`flex-1 px-3 py-2 text-xs font-medium rounded-md transition-all duration-200 ${
                    currentView === 'summary'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-transparent text-gray-600'
                  }`}
                >
                  INVESTOR VIEW
                </button>
                <button
                  onClick={() => handleViewToggle('detailed')}
                  className={`flex-1 px-3 py-2 text-xs font-medium rounded-md transition-all duration-200 ${
                    currentView === 'detailed'
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'bg-transparent text-gray-600'
                  }`}
                >
                  DETAILED CONTENT
                </button>
              </div>
            </div>

            {/* Mobile Menu Items - All navigation items */}
            {navigationItems.map((item) => (
              item.href ? (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                    router.pathname === item.href
                      ? 'text-[#66899b] bg-gray-100'
                      : 'text-gray-700 hover:text-[#66899b] hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <div key={item.label}>
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-[#66899b] hover:bg-gray-50 rounded-md"
                  >
                    {item.label}
                    <svg
                      className={`h-4 w-4 transition-transform duration-200 ${
                        openDropdown === item.label ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {openDropdown === item.label && (
                    <div className="pl-6 space-y-1">
                      {item.items?.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          onClick={() => {
                            setIsMenuOpen(false)
                            closeDropdowns()
                          }}
                          className={`block px-3 py-2 text-sm rounded-md transition-colors duration-200 ${
                            router.pathname === subItem.href
                              ? 'text-[#66899b] bg-gray-100'
                              : 'text-gray-600 hover:text-[#66899b] hover:bg-gray-50'
                          }`}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation

// Helper hook for other components to check current view
export const useViewMode = () => {
  const router = useRouter()
  const view = router.query.view as string
  return view === 'detailed' ? 'detailed' : 'summary'
}