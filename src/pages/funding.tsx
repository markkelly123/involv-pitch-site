import Head from 'next/head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import PitchNavigation from '../components/PitchNavigation'
import { SummaryView, DetailedView } from '../components/ViewSwitch'

export default function Funding() {
  return (
    <>
      <Head>
        <title>Investment Opportunity - Involv Investment Pitch</title>
        <meta name="description" content="Seeking seed investment to accelerate growth and product development with clear path to $200M+ valuation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <SummaryView>
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Investment Opportunity
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Join us in transforming Australia's gaming compliance landscape
              </p>
            </div>
          </SummaryView>

          <DetailedView>
            <div className="mb-8 pt-24 text-left max-w-3xl mx-auto">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
                FUNDING ASK & USE OF FUNDS
              </h1>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Seeking $[X] Million Seed Investment to Launch Software and Accelerate Growth</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Investment Highlights:</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Proven product-market fit with strong customer traction
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Large and growing addressable market
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Scalable SaaS business model with strong unit economics
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Experienced team with deep industry expertise and relationships
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Clear path to profitability and exit
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Use of Funds:</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Acquisition ([XX]%): protect software data inputs; accelerate Involv client acquisition
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • JV product development ([XX]%): Enhanced platform features
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Sales and marketing ([XX]%): Brand building and awareness, lead generation
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Working capital ([XX]%): General corporate purposes
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Milestones with This Funding:</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Reach 200 venues (service engagements and software implementation) by end of Year 2
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Launch Assure, Sentinel, SafePlay, and PrimeEdge
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Achieve $4M ARR
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Expand to all Australian states (QLD and NSW initial focus)
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Exit Strategy:</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Strategic acquisition by gaming technology company
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Private equity rollup
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Potential IPO path given SaaS multiples
              </p>
              <p className="text-gray-700 mb-4">
                • Target exit: 5-7 years, $200M+ valuation
              </p>
            </div>
          </DetailedView>

          {/* Investment Highlights */}
          <SummaryView>
            <div className="bg-gradient-to-r from-[#66899b] to-[#5a7a8a] rounded-2xl p-8 mb-20 text-white">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Why Invest in Involv</h2>
                <p className="text-xl opacity-90">Unique opportunity to capture a large, underserved market with proven team and technology</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold mb-2">$537M</div>
                  <div className="text-sm opacity-90 mb-2">Total Addressable Market</div>
                  <div className="text-xs opacity-80">Large, growing opportunity</div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold mb-2">Only</div>
                  <div className="text-sm opacity-90 mb-2">Integrated Solution</div>
                  <div className="text-xs opacity-80">No direct competition</div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold mb-2">50:1</div>
                  <div className="text-sm opacity-90 mb-2">LTV:CAC Ratio</div>
                  <div className="text-xs opacity-80">Exceptional unit economics</div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold mb-2">$2M+</div>
                  <div className="text-sm opacity-90 mb-2">Current Revenue</div>
                  <div className="text-xs opacity-80">Proven product-market fit</div>
                </div>
              </div>
            </div>
          </SummaryView>

          {/* Funding Ask */}
          <SummaryView>
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Funding Requirements</h2>
              
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Seeking Seed Investment</h3>
                    <div className="text-center mb-6">
                      <div className="text-5xl font-bold text-[#66899b] mb-2">$[X]M</div>
                      <div className="text-lg text-gray-600">Series Seed Round</div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                        <span className="font-medium text-gray-900">Target Close</span>
                        <span className="text-[#66899b] font-bold">Q3 2025</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                        <span className="font-medium text-gray-900">Use Timeline</span>
                        <span className="text-[#66899b] font-bold">24 months</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                        <span className="font-medium text-gray-900">Break-Even</span>
                        <span className="text-[#66899b] font-bold">Year 2</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Use of Funds</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <div>
                          <div className="font-medium text-blue-900">Product Development & JV</div>
                          <div className="text-sm text-blue-700">Enhanced platform features, partnerships</div>
                        </div>
                        <div className="text-2xl font-bold text-blue-600">40%</div>
                      </div>
                      
                      <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg border border-green-200">
                        <div>
                          <div className="font-medium text-green-900">Sales & Marketing</div>
                          <div className="text-sm text-green-700">Brand building, lead generation, team expansion</div>
                        </div>
                        <div className="text-2xl font-bold text-green-600">35%</div>
                      </div>
                      
                      <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                        <div>
                          <div className="font-medium text-purple-900">Working Capital</div>
                          <div className="text-sm text-purple-700">General corporate purposes, growth capital</div>
                        </div>
                        <div className="text-2xl font-bold text-purple-600">25%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SummaryView>

          {/* Key Milestones */}
          <SummaryView>
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Funded Milestones</h2>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 border border-blue-200">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-2">200</div>
                    <div className="text-sm font-medium text-gray-700 mb-1">Venues by End Year 2</div>
                    <div className="text-xs text-gray-600">Accelerated customer acquisition</div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-2">4</div>
                    <div className="text-sm font-medium text-gray-700 mb-1">Product Suite Launch</div>
                    <div className="text-xs text-gray-600">Assure, Sentinel, SafePlay, PrimeEdge</div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-2">$4M</div>
                    <div className="text-sm font-medium text-gray-700 mb-1">ARR Target</div>
                    <div className="text-xs text-gray-600">Strong recurring revenue foundation</div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-2">All</div>
                    <div className="text-sm font-medium text-gray-700 mb-1">States Expanded</div>
                    <div className="text-xs text-gray-600">National market coverage</div>
                  </div>
                </div>
              </div>
            </div>
          </SummaryView>

          {/* Exit Strategy */}
          <SummaryView>
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Exit Strategy</h2>
              
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m4 0V9a2 2 0 011-1h4a2 2 0 011 1v12m-6 0h6m0 0v-9" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Strategic Acquisition</h3>
                    <p className="text-gray-600 text-sm">
                      Gaming technology companies seeking integrated compliance solutions. 
                      Natural fit for players wanting complete venue management platforms.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Private Equity Rollup</h3>
                    <p className="text-gray-600 text-sm">
                      PE firms consolidating compliance and regulatory technology providers. 
                      Strong recurring revenue and margins attractive for portfolio building.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">IPO Potential</h3>
                    <p className="text-gray-600 text-sm">
                      SaaS multiples and regulatory technology focus create potential public market opportunity. 
                      Path available given strong growth and market position.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <div className="inline-flex items-center px-6 py-3 bg-[#66899b] text-white rounded-lg">
                    <span className="text-lg font-bold mr-4">Target:</span>
                    <span className="text-sm">5-7 year exit | $200M+ valuation</span>
                  </div>
                </div>
              </div>
            </div>
          </SummaryView>

          {/* Investment Terms */}
          <SummaryView>
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Investment Terms</h2>
              
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Investor Benefits</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                          <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Large Market Opportunity</div>
                          <div className="text-sm text-gray-600">$537M TAM with 10% penetration target</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                          <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Proven Team & Traction</div>
                          <div className="text-sm text-gray-600">$2M+ revenue, 14+ clients, strong relationships</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                          <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Exceptional Unit Economics</div>
                          <div className="text-sm text-gray-600">50:1 LTV:CAC ratio, 85%+ gross margins</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                          <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">No Direct Competition</div>
                          <div className="text-sm text-gray-600">Only integrated solution in Australian gaming compliance</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Next Steps</h3>
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="font-medium text-gray-900 mb-1">1. Initial Discussion</div>
                        <div className="text-sm text-gray-600">30-minute overview call to discuss opportunity and alignment</div>
                      </div>
                      
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="font-medium text-gray-900 mb-1">2. Due Diligence</div>
                        <div className="text-sm text-gray-600">Financial model review, customer references, technical deep dive</div>
                      </div>
                      
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="font-medium text-gray-900 mb-1">3. Term Sheet</div>
                        <div className="text-sm text-gray-600">Investment terms, board composition, milestone agreements</div>
                      </div>
                      
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="font-medium text-gray-900 mb-1">4. Documentation & Close</div>
                        <div className="text-sm text-gray-600">Legal documentation, final approvals, funds transfer</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SummaryView>

          {/* Call to Action */}
          <SummaryView>
            <div className="bg-gradient-to-r from-[#66899b] to-[#5a7a8a] rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Join us in our mission to transform the Australian gaming industry?</h2>
              <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                Join us in capturing the $400M+ opportunity to modernise Australia's gaming industry with the only integrated compliance and performance platform.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <div className="relative inline-block">
                  <div className="absolute -inset-1 bg-white/20 rounded-lg blur opacity-60 animate-pulse"></div>
                  <a 
                    href="mailto:mark.kelly@involv.com.au"
                    className="relative inline-flex items-center justify-center w-full px-8 py-4 bg-white text-[#66899b] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg"
                  >
                    <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email Founders
                  </a>
                </div>
                
                <div className="relative inline-block">
                  <a 
                    href="https://calendly.com/involv-founders"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center justify-center w-full px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
                  >
                    <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Schedule Meeting
                  </a>
                </div>
              </div>
              
              <div className="mt-8 text-sm opacity-80">
                <p>Mark Kelly, COO | mark.kelly@involv.com.au | +61 424 296 889</p>
              </div>
            </div>
          </SummaryView>
        </div>
      </div>

      <PitchNavigation />
      <Footer />
    </>
  )
}