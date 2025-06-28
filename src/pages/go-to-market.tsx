import Head from 'next/head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import PitchNavigation from '../components/PitchNavigation'
import { SummaryView, DetailedView } from '../components/ViewSwitch'

export default function GoToMarket() {
  return (
    <>
      <Head>
        <title>Go-to-Market Strategy - Involv Investment Pitch</title>
        <meta name="description" content="Multi-channel approach leveraging deep industry networks with founder-led sales and strategic partnerships." />
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
                Go-to-Market Strategy
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Multi-channel approach leveraging deep industry networks to capture the Australian pub and club gaming market
              </p>
            </div>
          </SummaryView>

          <DetailedView>
            <div className="mb-8 pt-24 text-left max-w-3xl mx-auto">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
                GO-TO-MARKET STRATEGY
              </h1>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Multi-Channel Approach Leveraging Deep Industry Networks</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>1. Founder Network Activation</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Con Nikitas's Industry Leverage: 30 years at ALH, AWC, Mathieson Group - direct warm introductions to top-tier venue owners, LMOs, regulators, and suppliers
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Target top 500 gaming venues (80% of market revenue) through established relationships
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Other founders activate extensive venue and supplier networks
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>2. Association-Led Market Penetration</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Partner with industry bodies (AHA, ClubsNSW, LCA) for webinars, joint whitepapers, and speaking opportunities
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Position Involv as compliance & optimisation authority across all state chapters
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Leverage association channels for credibility and reach
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>3. Strategic Channel Partnerships</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • AusComply & Sint Integration: Commission-based cross-sell leveraging hundreds of installed venues
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Embed Involv modules as premium add-ons within partner sales motions
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Partner with gaming equipment suppliers and hospitality management systems
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>4. Content & Digital Authority</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Thought leadership strategy: weekly blogs, SEO-optimised guides, LinkedIn content
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Targeted SEM campaigns on "AML venue obligations" and "gaming floor optimisation"
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Webinar series and YouTube explainers for compliance best practices
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>5. Industry Events & Conferences</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Strategic presence at AGE, AHG, RegTech AFR Summit
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Sponsor compliance streams with live Assure, Sentinel, SafePlay & PrimeEdge demonstrations
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Build pipeline through face-to-face relationship development
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Sales Methodology: Land & Expand</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Entry Point: AML advisory, or risk & compliance services (low risk, high trust building). Gaming Performance advisory related but separate stream.
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Upsell Path: Assure/Sentinel SaaS modules
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Cross-sell: PrimeEdge optimisation & SafePlay solutions
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Staffing: Founder-led initially, scaling to 2 BDRs by Year 3
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Year 1 Targets:</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • 65 venue contracts (20 advisory-first, 45 software-first direct and via partners)
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Average CAC &lt;$6K (50% below industry benchmarks via warm introductions)
              </p>
              <p className="text-gray-700 mb-4">
                • 60% advisory client conversion to SaaS modules within 12 months
              </p>
            </div>
          </DetailedView>

          {/* Strategy Overview */}
          <SummaryView>
            <div className="bg-gradient-to-r from-[#66899b] to-[#5a7a8a] rounded-2xl p-8 mb-20 text-white">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Five-Channel Approach</h2>
                <p className="text-xl opacity-90">De-risking customer acquisition through multiple proven pathways to market</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-lg font-bold">1</span>
                  </div>
                  <div className="text-sm font-medium">Founder Networks</div>
                  <div className="text-xs opacity-80 mt-1">30+ years industry relationships</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-lg font-bold">2</span>
                  </div>
                  <div className="text-sm font-medium">Association Partners</div>
                  <div className="text-xs opacity-80 mt-1">AHA, ClubsNSW, LCA channels</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-lg font-bold">3</span>
                  </div>
                  <div className="text-sm font-medium">Channel Partners</div>
                  <div className="text-xs opacity-80 mt-1">AusComply & Sint integration</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-lg font-bold">4</span>
                  </div>
                  <div className="text-sm font-medium">Digital Authority</div>
                  <div className="text-xs opacity-80 mt-1">Content & thought leadership</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-lg font-bold">5</span>
                  </div>
                  <div className="text-sm font-medium">Industry Events</div>
                  <div className="text-xs opacity-80 mt-1">AGE, AHG, RegTech summits</div>
                </div>
              </div>
            </div>
          </SummaryView>

          {/* Channel 1: Founder Network Activation */}
          <SummaryView>
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">1. Founder Network Activation</h2>
              
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 ml-4">Con Nikitas's Industry Leverage</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-blue-50 rounded-lg p-4">
                        <div className="font-medium text-blue-900 mb-2">30 Years Industry Experience</div>
                        <div className="text-sm text-blue-800">ALH Group, AWC, Mathieson Group leadership positions managing 13,000+ EGMs</div>
                      </div>
                      
                      <div className="bg-green-50 rounded-lg p-4">
                        <div className="font-medium text-green-900 mb-2">Direct Warm Introductions</div>
                        <div className="text-sm text-green-800">Top-tier venue owners, LMOs, regulators, and suppliers across Australia</div>
                      </div>
                      
                      <div className="bg-purple-50 rounded-lg p-4">
                        <div className="font-medium text-purple-900 mb-2">Strategic Market Focus</div>
                        <div className="text-sm text-purple-800">Top 500 gaming venues representing 80% of total market revenue</div>
                      </div>

                      <div className="bg-orange-50 rounded-lg p-4">
                        <div className="font-medium text-orange-900 mb-2">Extended Founder Networks</div>
                        <div className="text-sm text-orange-800">Tim, Louise & Mark activate extensive venue and supplier networks across all states</div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-6">Comprehensive Network Coverage</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm font-medium text-gray-900">Venue Operators</span>
                        <span className="text-sm text-[#66899b] font-bold">Hundreds of direct contacts</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm font-medium text-gray-900">State Regulators</span>
                        <span className="text-sm text-[#66899b] font-bold">All jurisdictions covered</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm font-medium text-gray-900">LMOs & Suppliers</span>
                        <span className="text-sm text-[#66899b] font-bold">Established relationships</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm font-medium text-gray-900">Industry Bodies</span>
                        <span className="text-sm text-[#66899b] font-bold">Board-level access</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm font-medium text-gray-900">Gaming Manufacturers</span>
                        <span className="text-sm text-[#66899b] font-bold">C-suite relationships</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <div className="p-4 bg-[#66899b] rounded-lg text-white text-center">
                        <div className="text-lg font-bold mb-1">50% Lower</div>
                        <div className="text-xs opacity-90">CAC vs industry average</div>
                      </div>
                      <div className="p-4 bg-green-600 rounded-lg text-white text-center">
                        <div className="text-lg font-bold mb-1">&lt;$6K</div>
                        <div className="text-xs opacity-90">Average CAC target</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SummaryView>

          {/* Channel 2: Association-Led Market Penetration */}
          <SummaryView>
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">2. Association-Led Market Penetration</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m4 0V9a2 2 0 011-1h4a2 2 0 011 1v12m-6 0h6m0 0v-9" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 ml-4">Industry Body Partnerships</h3>
                  </div>
                  
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Partner with AHA, ClubsNSW, LCA for webinars and joint content
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Position Involv as compliance & optimisation authority across all state chapters
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Speaking opportunities at association conferences and member events
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Leverage association channels for credibility and direct member access
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 ml-4">Authority Building Strategy</h3>
                  </div>
                  
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Joint whitepapers on compliance best practices and regulatory updates
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Educational webinar series for association members
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Regular contributions to industry newsletters and publications
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Regulatory update briefings and compliance alerts
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </SummaryView>

          {/* Channel 3: Strategic Channel Partnerships */}
          <SummaryView>
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">3. Strategic Channel Partnerships</h2>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 border border-blue-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">AusComply & Sint Integration</h3>
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="font-medium text-gray-900 mb-2">Commission-Based Cross-Sell</div>
                        <div className="text-sm text-gray-600">Leverage hundreds of installed venues through existing trusted relationships</div>
                      </div>
                      
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="font-medium text-gray-900 mb-2">Premium Add-On Strategy</div>
                        <div className="text-sm text-gray-600">Embed Involv modules within partner sales motions as enhanced compliance features</div>
                      </div>
                      
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="font-medium text-gray-900 mb-2">Integrated Data Value</div>
                        <div className="text-sm text-gray-600">Unique value proposition through integrated compliance and operational analytics</div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Expanded Partner Ecosystem</h3>
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="font-medium text-gray-900 mb-2">Gaming Equipment Suppliers</div>
                        <div className="text-sm text-gray-600">Partner with EGM manufacturers and distributors for optimisation solutions</div>
                      </div>
                      
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="font-medium text-gray-900 mb-2">Hospitality Management Systems</div>
                        <div className="text-sm text-gray-600">Integrate with venue POS and management platforms for seamless data flow</div>
                      </div>
                      
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="font-medium text-gray-900 mb-2">Professional Services Network</div>
                        <div className="text-sm text-gray-600">Referral partnerships with legal, accounting, and consulting firms</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <div className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg">
                    <span className="text-lg font-bold mr-2">Hundreds</span>
                    <span className="text-sm">of venues accessible through existing partner relationships</span>
                  </div>
                </div>
              </div>
            </div>
          </SummaryView>

          {/* Digital Authority & Events */}
          <SummaryView>
            <div className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Channel 4: Content & Digital Authority */}
                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 ml-4">4. Content & Digital Authority</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-3 bg-yellow-50 rounded-lg">
                      <div className="font-medium text-yellow-900 mb-1">Thought Leadership Strategy</div>
                      <div className="text-sm text-yellow-800">Weekly blogs, SEO-optimised compliance guides, LinkedIn thought leadership</div>
                    </div>
                    
                    <div className="p-3 bg-yellow-50 rounded-lg">
                      <div className="font-medium text-yellow-900 mb-1">Targeted SEM Campaigns</div>
                      <div className="text-sm text-yellow-800">"AML venue obligations" and "gaming floor optimisation" keyword targeting</div>
                    </div>
                    
                    <div className="p-3 bg-yellow-50 rounded-lg">
                      <div className="font-medium text-yellow-900 mb-1">Educational Content Hub</div>
                      <div className="text-sm text-yellow-800">Webinar series and YouTube explainers for compliance best practices</div>
                    </div>
                  </div>
                </div>

                {/* Channel 5: Industry Events */}
                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 ml-4">5. Industry Events & Conferences</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-3 bg-red-50 rounded-lg">
                      <div className="font-medium text-red-900 mb-1">Strategic Event Presence</div>
                      <div className="text-sm text-red-800">AGE, AHG, RegTech AFR Summit with targeted sponsorship packages</div>
                    </div>
                    
                    <div className="p-3 bg-red-50 rounded-lg">
                      <div className="font-medium text-red-900 mb-1">Live Product Demonstrations</div>
                      <div className="text-sm text-red-800">Sponsor compliance streams with Assure, Sentinel, SafePlay & PrimeEdge demos</div>
                    </div>
                    
                    <div className="p-3 bg-red-50 rounded-lg">
                      <div className="font-medium text-red-900 mb-1">Pipeline Development</div>
                      <div className="text-sm text-red-800">Face-to-face relationship building and qualified lead generation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SummaryView>

          {/* Sales Methodology */}
          <SummaryView>
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Land & Expand Sales Methodology</h2>
              
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-blue-600">LAND</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Entry Point Services</h3>
                    <div className="space-y-3">
                      <div className="bg-blue-50 rounded-lg p-3">
                        <div className="text-sm font-medium text-blue-900">AML Advisory</div>
                        <div className="text-xs text-blue-700 mt-1">Low risk, high trust building entry point</div>
                      </div>
                      <div className="bg-green-50 rounded-lg p-3">
                        <div className="text-sm font-medium text-green-900">Risk & Compliance Services</div>
                        <div className="text-xs text-green-700 mt-1">Demonstrate deep regulatory expertise</div>
                      </div>
                      <div className="bg-purple-50 rounded-lg p-3">
                        <div className="text-sm font-medium text-purple-900">Gaming Performance Advisory</div>
                        <div className="text-xs text-purple-700 mt-1">Separate but parallel revenue stream</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-xl font-bold text-green-600">UPSELL</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">SaaS Platform Modules</h3>
                    <div className="space-y-3">
                      <div className="bg-blue-50 rounded-lg p-3">
                        <div className="text-sm font-medium text-blue-900">Assure GRC Platform</div>
                        <div className="text-xs text-blue-700 mt-1">Automate compliance processes and reporting</div>
                      </div>
                      <div className="bg-red-50 rounded-lg p-3">
                        <div className="text-sm font-medium text-red-900">Sentinel Monitoring</div>
                        <div className="text-xs text-red-700 mt-1">Real-time transaction monitoring and alerts</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-xl font-bold text-purple-600">EXPAND</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Full Platform Suite</h3>
                    <div className="space-y-3">
                      <div className="bg-purple-50 rounded-lg p-3">
                        <div className="text-sm font-medium text-purple-900">PrimeEdge Optimisation</div>
                        <div className="text-xs text-purple-700 mt-1">AI-driven gaming floor performance</div>
                      </div>
                      <div className="bg-green-50 rounded-lg p-3">
                        <div className="text-sm font-medium text-green-900">SafePlay Monitoring</div>
                        <div className="text-xs text-green-700 mt-1">Safer gaming compliance and reporting</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Conversion & Scaling Metrics</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white rounded-lg p-4 border">
                        <div className="text-2xl font-bold text-[#66899b] mb-1">60%</div>
                        <div className="text-sm text-gray-600">Advisory client conversion to SaaS within 12 months</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 border">
                        <div className="text-2xl font-bold text-green-600 mb-1">Founder-Led</div>
                        <div className="text-sm text-gray-600">Initially, scaling to 2 BDRs by Year 3</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SummaryView>

          {/* Year 1 Targets */}
          <SummaryView>
            <div className="bg-gradient-to-r from-[#66899b] to-[#5a7a8a] rounded-2xl p-8 text-white">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Year 1 Conservative Targets</h2>
                <p className="text-xl opacity-90">Achievable goals with founder-led execution and proven industry relationships</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold mb-3">65</div>
                  <div className="text-lg mb-2">Venue Contracts</div>
                  <div className="text-sm opacity-80">20 advisory-first, 45 software-first (direct + partners)</div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold mb-3">&lt;$6K</div>
                  <div className="text-lg mb-2">Average CAC</div>
                  <div className="text-sm opacity-80">50% below industry via warm introductions</div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold mb-3">80%</div>
                  <div className="text-lg mb-2">Market Revenue</div>
                  <div className="text-sm opacity-80">Coverage through top 500 venues</div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold mb-3">60%</div>
                  <div className="text-lg mb-2">Conversion Rate</div>
                  <div className="text-sm opacity-80">Advisory clients to SaaS modules</div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20">
                <h3 className="text-xl font-bold mb-4 text-center">Staffing Strategy</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="font-bold mb-1">Year 1</div>
                    <div className="text-sm opacity-80">Founder-led sales and delivery</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="font-bold mb-1">Year 2</div>
                    <div className="text-sm opacity-80">Add 1 Business Development Rep</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="font-bold mb-1">Year 3</div>
                    <div className="text-sm opacity-80">Scale to 2 BDRs + systematic processes</div>
                  </div>
                </div>
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