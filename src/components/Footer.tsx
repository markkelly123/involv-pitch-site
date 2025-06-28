import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const pitchSections = [
    { href: '/', label: 'Beginning' },
    { href: '/problem', label: 'Problem' },
    { href: '/solution', label: 'Solution' },
    { href: '/market', label: 'Market' },
    { href: '/business-model', label: 'Business Model' },
    { href: '/traction', label: 'Traction' },
    { href: '/competition', label: 'Competition' },
    { href: '/go-to-market', label: 'Go-to-Market' },
    { href: '/financials', label: 'Financials' },
    { href: '/team', label: 'Team' },
    { href: '/funding', label: 'Investment Ask' }
  ]

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <Image
                src="/logo-involv-white.svg"
                alt="Involv"
                width={150}
                height={50}
                className="h-8 w-auto"
              />
            </div>
            <div className="text-gray-300 text-sm mb-6 space-y-1">
              <p>Compliance Made Simple.</p>
              <p>Gaming Made Smarter.</p>
              <p className="text-[#66899b] font-medium">Built for Pubs and Clubs.</p>
            </div>
            
            {/* Contact Info */}
            <div className="text-gray-300 text-sm space-y-2">
              <p>Investment Inquiries:</p>
              <a 
                href="mailto:mark.kelly@involv.com.au" 
                className="text-[#66899b] hover:text-white transition-colors"
              >
                mark.kelly@involv.com.au
              </a>
            </div>
          </div>
          
          {/* Pitch Navigation - Split into 3 columns */}
          <div className="md:col-span-3">
            <h3 className="font-semibold mb-6 text-lg">Presentation Navigation</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {pitchSections.map((section, index) => (
                <Link
                  key={section.href}
                  href={section.href}
                  className="flex items-center text-gray-300 hover:text-[#66899b] transition-colors duration-200 text-sm py-1"
                >
                  <span className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center text-xs font-medium mr-3 group-hover:bg-[#66899b]">
                    {index + 1}
                  </span>
                  {section.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="flex items-center space-x-4">
            <p>&copy; 2025 Involv Pty Ltd. All rights reserved.</p>
            <span className="hidden md:inline">•</span>
            <p className="text-xs">Confidential Investment Presentation</p>
          </div>
          
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a 
              href="https://preview.involv.com.au?_vercel_share=P6IQohuopGuPbLsvPDzZmN2VWIIl2Udu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#66899b] transition-colors"
            >
              Main Website
            </a>
            <a 
              href="https://www.linkedin.com/company/involvgroup/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#66899b] transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}