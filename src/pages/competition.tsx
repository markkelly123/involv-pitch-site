import Head from 'next/head'
import Image from 'next/image'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import PitchNavigation from '../components/PitchNavigation'
import { SummaryView, DetailedView } from '../components/ViewSwitch'

export default function Competition() {
  return (
    <>
      <Head>
        <title>Competition & Positioning - Involv Investment Pitch</title>
        <meta name="description" content="Involv offers the only integrated solution in the Australian gaming compliance market with a unique co-opetition strategy." />
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
                Competitive Positioning
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                The only integrated solution in the Australian gaming compliance market
              </p>
            </div>
          </SummaryView>
          <DetailedView>
            <div className="mb-8 pt-24 text-left max-w-3xl mx-auto">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
                COMPETITION & POSITIONING
              </h1>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Involv offers the only integrated solution in the Australian gaming compliance market</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Our "Co‑opetition" Strategy</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                Involv partners with selected competitors to create an unbeatable, end‑to‑end stack while still outperforming them in our core domains.
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Segment: Incident & Ops Reporting</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Key Players:</strong> AusComply (FRT‑focused), Star Comply
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Involv Advantage:</strong> Integrates AusComply incidents into <strong>Assure</strong> ➜ richer risk data. Cross‑referral agreement unlocks <strong>hundreds of venues</strong> and slashes CAC.
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Segment: Data Interface / Venue Telemetry</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Key Players:</strong> Sint (Cashtax, Playtrax)
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Involv Advantage:</strong> JV to pipe granular EGM & transaction data into <strong>Sentinel</strong> and <strong>SafePlay</strong>. Shared clients = rapid scale.
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Segment: GRC Platforms</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Key Players:</strong> Cammsgroup, Protecht, Archer, ERM Online
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Involv Advantage:</strong> Generic, multi‑industry; lack venue‑specific content. <strong>Assure</strong> offers gaming‑ready obligation libraries and control templates.
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Segment: Gaming Optimisation</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Key Players:</strong> Tangam SODA, QCI (Tony Toohey)
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Involv Advantage:</strong> Point‑solutions; no compliance link. <strong>PrimeEdge</strong> couples AI optimisation with compliance analytics for unique 360° view.
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Segment: Consulting / Advisory</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Key Players:</strong> Senet Legal, Addisons Lawyers, KordaMentha, Kroll, PwC
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Involv Advantage:</strong> Big‑ticket, law‑first. Involv delivers <strong>operator‑level practicality</strong> ➜ faster, cheaper, tech‑enabled outcomes.
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Competitive Moat</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • <strong>Founders</strong>: Complete solution coverage in one team (gaming operations, regulatory legal, transformation, tech innovation). 80+ years of sector specific experience and subject matter expertise. Proven (and respected) track record. Comprehensive industry relationships.
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • <strong>Tri‑party lock‑in:</strong> AusComply × Sint × Involv integration makes it costly for venues to switch any single piece. Network effects as more venues join platform. [Option to acquire]
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • <strong>Consulting‑led land‑and‑expand</strong> builds trust and funnels clients into long-term software adoption, a path no pure‑tech rival can replicate. Industry-specific IP and regulatory knowledge.
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • <strong>Advisory-embedded technology:</strong> Involv uniquely integrates AML/CTF, risk, and regulatory expertise directly into the GRC platform.
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • <strong>Sector depth and innovation focused:</strong> Purpose‑built for Australian pubs and club gaming venues - where horizontal platforms struggle. Continuous product development and innovation.
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Key Differentiators:</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • <strong>Industry Specialisation:</strong> Purpose-built for Australian gaming venues
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • <strong>Regulatory Expertise:</strong> Deep AML and gaming compliance knowledge
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • <strong>Integrated Platform:</strong> Single solution vs. multiple vendor relationships
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • <strong>Local Presence:</strong> Australian-based team with market knowledge
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • <strong>Proven Results:</strong> Demonstrated ROI for clients
              </p>
              <p className="text-gray-700 mb-4">
                • <strong>Scalable Technology:</strong> Modern cloud architecture
              </p>
            </div>
          </DetailedView>

          {/* Positioning Statement */}
          <SummaryView>
            <div className="bg-gradient-to-r from-[#66899b] to-[#5a7a8a] rounded-2xl p-8 mb-20 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Our "Co-opetition" Strategy</h2>
              <p className="text-xl opacity-90 max-w-4xl mx-auto">
                Involv partners with selected competitors to create an unbeatable, end-to-end stack while still outperforming them in our core domains
              </p>
            </div>
          </SummaryView>

          {/* Competitive Landscape Analysis */}
          <SummaryView>
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Competitive Landscape Analysis</h2>
              
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Segment</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Key Players</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Involv Advantage</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-6">
                          <div className="font-medium text-gray-900 mb-1">Incident & Ops Reporting</div>
                          <div className="text-sm text-gray-600">Operational compliance reporting</div>
                        </td>
                        <td className="px-6 py-6">
                          <div className="space-y-1">
                            <div className="font-medium text-gray-900">AusComply</div>
                            <div className="text-sm text-gray-600">FRT-focused</div>
                            <div className="font-medium text-gray-900">Star Comply</div>
                          </div>
                        </td>
                        <td className="px-6 py-6">
                          <div className="space-y-2">
                            <div className="flex items-start">
                              <span className="w-2 h-2 bg-[#66899b] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span className="text-sm text-gray-700">Integrates AusComply incidents into <strong>Assure</strong> for richer risk data</span>
                            </div>
                            <div className="flex items-start">
                              <span className="w-2 h-2 bg-[#66899b] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span className="text-sm text-gray-700">Cross-referral agreement unlocks <strong>hundreds of venues</strong></span>
                            </div>
                          </div>
                        </td>
                      </tr>
                      
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-6">
                          <div className="font-medium text-gray-900 mb-1">Data Interface / Venue Telemetry</div>
                          <div className="text-sm text-gray-600">Gaming data aggregation</div>
                        </td>
                        <td className="px-6 py-6">
                          <div className="space-y-1">
                            <div className="font-medium text-gray-900">Sint</div>
                            <div className="text-sm text-gray-600">Cashtax, Playtrax</div>
                          </div>
                        </td>
                        <td className="px-6 py-6">
                          <div className="space-y-2">
                            <div className="flex items-start">
                              <span className="w-2 h-2 bg-[#66899b] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span className="text-sm text-gray-700">JV to pipe granular EGM & transaction data into <strong>Sentinel</strong> and <strong>SafePlay</strong></span>
                            </div>
                            <div className="flex items-start">
                              <span className="w-2 h-2 bg-[#66899b] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span className="text-sm text-gray-700">Shared clients enable rapid scale</span>
                            </div>
                          </div>
                        </td>
                      </tr>
                      
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-6">
                          <div className="font-medium text-gray-900 mb-1">GRC Platforms</div>
                          <div className="text-sm text-gray-600">Governance, risk & compliance</div>
                        </td>
                        <td className="px-6 py-6">
                          <div className="space-y-1">
                            <div className="font-medium text-gray-900">Cammsgroup</div>
                            <div className="font-medium text-gray-900">Protecht</div>
                            <div className="font-medium text-gray-900">Archer</div>
                            <div className="font-medium text-gray-900">ERM Online</div>
                          </div>
                        </td>
                        <td className="px-6 py-6">
                          <div className="space-y-2">
                            <div className="flex items-start">
                              <span className="w-2 h-2 bg-[#66899b] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span className="text-sm text-gray-700">Generic, multi-industry solutions lack venue-specific content</span>
                            </div>
                            <div className="flex items-start">
                              <span className="w-2 h-2 bg-[#66899b] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span className="text-sm text-gray-700"><strong>Assure</strong> offers gaming-ready obligation libraries and control templates</span>
                            </div>
                          </div>
                        </td>
                      </tr>
                      
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-6">
                          <div className="font-medium text-gray-900 mb-1">Gaming Optimisation</div>
                          <div className="text-sm text-gray-600">EGM performance analytics</div>
                        </td>
                        <td className="px-6 py-6">
                          <div className="space-y-1">
                            <div className="font-medium text-gray-900">Tangam SODA</div>
                            <div className="font-medium text-gray-900">QCI</div>
                            <div className="text-sm text-gray-600">Tony Toohey</div>
                          </div>
                        </td>
                        <td className="px-6 py-6">
                          <div className="space-y-2">
                            <div className="flex items-start">
                              <span className="w-2 h-2 bg-[#66899b] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span className="text-sm text-gray-700">Point-solutions with no compliance link</span>
                            </div>
                            <div className="flex items-start">
                              <span className="w-2 h-2 bg-[#66899b] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span className="text-sm text-gray-700"><strong>PrimeEdge</strong> couples AI optimisation with compliance analytics for unique 360° view</span>
                            </div>
                          </div>
                        </td>
                      </tr>
                      
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-6">
                          <div className="font-medium text-gray-900 mb-1">Consulting / Advisory</div>
                          <div className="text-sm text-gray-600">Professional services</div>
                        </td>
                        <td className="px-6 py-6">
                          <div className="space-y-1">
                            <div className="font-medium text-gray-900">Senet Legal</div>
                            <div className="font-medium text-gray-900">Addisons Lawyers</div>
                            <div className="font-medium text-gray-900">KordaMentha</div>
                            <div className="font-medium text-gray-900">Kroll, PwC</div>
                          </div>
                        </td>
                        <td className="px-6 py-6">
                          <div className="space-y-2">
                            <div className="flex items-start">
                              <span className="w-2 h-2 bg-[#66899b] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span className="text-sm text-gray-700">Big-ticket, law-first approach</span>
                            </div>
                            <div className="flex items-start">
                              <span className="w-2 h-2 bg-[#66899b] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span className="text-sm text-gray-700">Involv delivers <strong>operator-level practicality</strong> with faster, cheaper, tech-enabled outcomes</span>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </SummaryView>

          {/* Market Positioning Map */}
          <SummaryView>
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Market Positioning Map</h2>
              
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 text-center">
                <Image
                  src="/positioning-map.png"
                  alt="Involv Competitive Positioning Map"
                  width={800}
                  height={600}
                  className="mx-auto max-w-full h-auto rounded-lg"
                />
                <p className="text-gray-600 text-sm mt-6 max-w-3xl mx-auto">
                  Involv uniquely combines <strong>high industry specialisation</strong> with <strong>comprehensive platform breadth</strong>, 
                  positioning us as the only integrated solution provider in the Australian gaming compliance market.
                </p>
              </div>
            </div>
          </SummaryView>

          {/* Key Differentiators */}
          <SummaryView>
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Key Differentiators</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m4 0V9a2 2 0 011-1h4a2 2 0 011 1v12m-6 0h6m0 0v-9" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Industry Specialisation</h3>
                  <p className="text-gray-600 text-sm">
                    Purpose-built for Australian gaming venues where horizontal platforms struggle. Deep regulatory knowledge embedded directly into products.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Integrated Platform</h3>
                  <p className="text-gray-600 text-sm">
                    Single solution vs. multiple vendor relationships. Complete advisory + GRC + performance + real-time AML + safer gambling ecosystem.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Regulatory Expertise</h3>
                  <p className="text-gray-600 text-sm">
                    Deep AML and gaming compliance knowledge from industry veterans. Advisory-embedded technology no pure-tech rival can replicate.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Local Presence</h3>
                  <p className="text-gray-600 text-sm">
                    Australian-based team with deep market knowledge. Founded by operators for operators with minimal learning curve.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Results</h3>
                  <p className="text-gray-600 text-sm">
                    Demonstrated ROI for clients with 35% compliance cost reduction and 5-15% gaming revenue improvement from early implementations.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Scalable Technology</h3>
                  <p className="text-gray-600 text-sm">
                    Modern cloud architecture with real-time analytics across compliance and revenue levers. First-mover advantage in integrated solutions.
                  </p>
                </div>
              </div>
            </div>
          </SummaryView>

          {/* Competitive Moat */}
          <SummaryView>
            <div className="bg-gradient-to-br from-[#66899b] to-[#5a7a8a] rounded-2xl p-8 text-white">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Competitive Moat</h2>
                <p className="text-xl opacity-90">Multiple layers of protection creating sustainable competitive advantage</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <h3 className="text-lg font-bold mb-3">Founder Advantage</h3>
                    <p className="text-sm opacity-90">
                      Complete solution coverage in one team with 80+ years of sector-specific experience. 
                      Proven track record and comprehensive industry relationships that cannot be easily replicated.
                    </p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <h3 className="text-lg font-bold mb-3">Consulting-Led Land & Expand</h3>
                    <p className="text-sm opacity-90">
                      Advisory approach builds trust and funnels clients into long-term software adoption. 
                      A path no pure-tech rival can replicate due to deep regulatory expertise requirements.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <h3 className="text-lg font-bold mb-3">Tri-Party Lock-In</h3>
                    <p className="text-sm opacity-90">
                      AusComply × Sint × Involv integration makes it costly for venues to switch any single piece. 
                      Network effects strengthen as more venues join the platform.
                    </p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <h3 className="text-lg font-bold mb-3">Embedded Expertise</h3>
                    <p className="text-sm opacity-90">
                      Advisory-embedded technology uniquely integrates AML/CTF, risk, and regulatory expertise 
                      directly into the GRC platform with continuous innovation focus.
                    </p>
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