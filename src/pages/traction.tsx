import Head from 'next/head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import PitchNavigation from '../components/PitchNavigation'
import { SummaryView, DetailedView } from '../components/ViewSwitch'

export default function Traction() {
  return (
    <>
      <Head>
        <title>Traction & Validation - Involv Investment Pitch</title>
        <meta name="description" content="Strong early momentum with $2M revenue, 14+ clients, and validated product-market fit across advisory and software." />
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
                Strong Early Traction
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Proven product-market fit with rapid growth across advisory and software solutions
              </p>
            </div>
          </SummaryView>
          <DetailedView>
            <div className="mb-8 pt-24 text-left max-w-3xl mx-auto">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
                TRACTION & VALIDATION
              </h1>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Strong Early Momentum in Consulting/Advisory</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Consulting Momentum:</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • 5+ paying clients across AML, compliance and gaming‑performance engagements---contracts currently delivered through the founders' consulting vehicles and scheduled to roll into Involv within the next quarter.
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Lane Consulting Expansion:</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Lane Consulting brand to remain and target 90,000+ Tranche‑2 reporting entities (legal, accounting, real‑estate, sports integrity bodies, payments & fintech). Proven AML‑review methodology is directly transferable, opening a second, much larger service vertical.
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Revenue to Date:</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • c. $2M consulting revenue booked FY‑to‑date; run‑rate already beating initial year‑one forecasts.
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Product JV Agreements:</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • [Heads of Agreement executed with a GRC platform partner and a raw EGM‑optimisation tech provider.]
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • PRDs completed; bespoke builds commencing
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Q3 2025 with beta releases targeted for Q1 2026.
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Product Validation: [to be included once received]</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Projected average compliance cost reduction: 35%
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Projected gaming revenue improvement: 5-15% for PrimeEdge clients
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Customer satisfaction score: 9/10
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Pipeline & Partnerships:</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Founder industry relationships span hundreds of venues, all Regulators, Licensed Monitoring Organisations (LMOs).
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Demand for high-margin AML advisory and transaction monitoring software exceeding forecasts
              </p>
              <p className="text-gray-700 mb-4">
                • In negotiations with two industry‑incumbent integration and channel partners -- provide accelerated access to hundreds of additional venues already using their products
              </p>
            </div>
          </DetailedView>

          {/* Key Metrics Overview */}
          <SummaryView>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-8 text-white text-center">
                <div className="text-4xl font-bold mb-3">$2M+</div>
                <div className="text-lg font-medium mb-2">Revenue FY-to-Date</div>
                <div className="text-sm opacity-90">Beating Year 1 forecasts</div>
              </div>
              <div className="bg-gradient-to-r from-[#66899b] to-[#5a7a8a] rounded-xl p-8 text-white text-center">
                <div className="text-4xl font-bold mb-3">14+</div>
                <div className="text-lg font-medium mb-2">Current Clients</div>
                <div className="text-sm opacity-90">Across all service lines</div>
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-8 text-white text-center">
                <div className="text-4xl font-bold mb-3">1</div>
                <div className="text-lg font-medium mb-2">GRC Tool Beta Client</div>
                <div className="text-sm opacity-90">Validating software platform</div>
              </div>
            </div>
          </SummaryView>

          {/* Consulting Momentum */}
          <SummaryView>
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Advisory Services Momentum</h2>
              
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Service Line Performance</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                          <span className="font-medium text-gray-900">AML Advisory</span>
                        </div>
                        <div className="text-sm">
                          <span className="font-bold text-blue-600">5+ engagements</span>
                          <span className="text-gray-600 ml-2">active</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                          <span className="font-medium text-gray-900">Risk & Compliance</span>
                        </div>
                        <div className="text-sm">
                          <span className="font-bold text-green-600">4+ projects</span>
                          <span className="text-gray-600 ml-2">delivered</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                          <span className="font-medium text-gray-900">Gaming Performance</span>
                        </div>
                        <div className="text-sm">
                          <span className="font-bold text-purple-600">3+ venues</span>
                          <span className="text-gray-600 ml-2">optimising</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Revenue Growth</h3>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="text-center mb-4">
                        <div className="text-3xl font-bold text-[#66899b] mb-2">$2M+</div>
                        <div className="text-sm text-gray-600">FY-to-Date Revenue</div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Contracts Executing</span>
                          <span className="font-medium text-gray-900">Rolling into Involv Q1</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Year 1 Forecast Status</span>
                          <span className="font-medium text-green-600">Beating projections</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Run Rate</span>
                          <span className="font-medium text-gray-900">$3M+ annualised</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lane Consulting Expansion */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 border border-purple-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 ml-4">Lane Consulting Expansion</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 mb-4">
                      Expanding proven AML methodology to Tranche-2 reporting entities across multiple sectors
                    </p>
                    <ul className="space-y-2 text-sm text-purple-700">
                      <li>• 90,000+ potential target entities</li>
                      <li>• Legal, accounting, real estate sectors</li>
                      <li>• Sports integrity and payments/fintech</li>
                      <li>• Proven methodology directly transferable</li>
                    </ul>
                  </div>
                  <div className="bg-white/50 rounded-lg p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600 mb-1">90,000+</div>
                      <div className="text-sm text-gray-600 mb-3">Target Entities</div>
                      <div className="text-xs text-purple-700">Second revenue vertical with much larger addressable market</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SummaryView>

          {/* Product Development Progress */}
          <SummaryView>
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Product Development & Validation</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">JV Partnership Progress</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <div className="font-medium text-gray-900">Heads of Agreement Executed</div>
                        <div className="text-sm text-gray-600">GRC platform partner & EGM optimisation tech provider</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <div className="font-medium text-gray-900">PRDs Completed</div>
                        <div className="text-sm text-gray-600">Product requirements documented for bespoke builds</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <div className="font-medium text-gray-900">Development Commenced</div>
                        <div className="text-sm text-gray-600">Q3 2025 builds underway</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Beta Program Results</h3>
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-[#66899b] mb-2">1</div>
                    <div className="text-sm text-gray-600 mb-4">Client Trialling GRC Tool</div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-green-800">Compliance Cost Reduction</span>
                        <span className="text-lg font-bold text-green-600">35%</span>
                      </div>
                      <div className="text-xs text-green-700 mt-1">Projected savings vs. manual processes</div>
                    </div>
                    
                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-blue-800">Gaming Revenue Improvement</span>
                        <span className="text-lg font-bold text-blue-600">5-15%</span>
                      </div>
                      <div className="text-xs text-blue-700 mt-1">Early PrimeEdge optimization results</div>
                    </div>
                    
                    <div className="bg-purple-50 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-purple-800">Customer Satisfaction</span>
                        <span className="text-lg font-bold text-purple-600">9/10</span>
                      </div>
                      <div className="text-xs text-purple-700 mt-1">Net Promoter Score from pilot clients</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SummaryView>

          {/* Pipeline & Partnerships */}
          <SummaryView>
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Pipeline & Strategic Partnerships</h2>
              
              <div className="bg-gradient-to-r from-[#66899b] to-[#5a7a8a] rounded-2xl p-8 text-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-6">Industry Relationships</h3>
                    <div className="space-y-4">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                        <div className="font-medium mb-2">Founder Networks</div>
                        <div className="text-sm opacity-90">Direct relationships spanning hundreds of venues, all regulators, and LMOs</div>
                      </div>
                      
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                        <div className="font-medium mb-2">Regulatory Access</div>
                        <div className="text-sm opacity-90">Established relationships with state gaming regulators and AUSTRAC</div>
                      </div>
                      
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                        <div className="font-medium mb-2">Industry Bodies</div>
                        <div className="text-sm opacity-90">Active engagement with AHA, ClubsNSW, LCA, and other associations</div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-6">Channel Partnerships</h3>
                    <div className="space-y-4">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                        <div className="font-medium mb-2">Integration Partners</div>
                        <div className="text-sm opacity-90">Negotiations with two industry incumbents for accelerated venue access</div>
                      </div>
                      
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                        <div className="font-medium mb-2">Market Access</div>
                        <div className="text-sm opacity-90">Commission-sharing agreements to reduce CAC and accelerate client acquisition</div>
                      </div>
                      
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                        <div className="font-medium mb-2">Demand Validation</div>
                        <div className="text-sm opacity-90">AML advisory and transaction monitoring demand exceeding forecasts</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SummaryView>

          {/* Development Timeline */}
          <SummaryView>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Development Roadmap</h2>
              
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-300"></div>
                
                <div className="space-y-8">
                  {/* Q3 2025 */}
                  <div className="relative flex items-center">
                    <div className="flex-1 pr-8 text-right">
                      <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                        <div className="font-medium text-green-800">Q3 2025 - Current</div>
                        <div className="text-sm text-green-700 mt-1">Bespoke builds commencing, PRDs completed</div>
                      </div>
                    </div>
                    <div className="w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow relative z-10"></div>
                    <div className="flex-1 pl-8"></div>
                  </div>
                  
                  {/* Q1 2026 */}
                  <div className="relative flex items-center">
                    <div className="flex-1 pr-8"></div>
                    <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow relative z-10"></div>
                    <div className="flex-1 pl-8">
                      <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                        <div className="font-medium text-blue-800">Q1 2026 - Target</div>
                        <div className="text-sm text-blue-700 mt-1">Beta releases for Assure, Sentinel, SafePlay, PrimeEdge</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Q2 2026 */}
                  <div className="relative flex items-center">
                    <div className="flex-1 pr-8 text-right">
                      <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                        <div className="font-medium text-purple-800">Q2 2026 - Goal</div>
                        <div className="text-sm text-purple-700 mt-1">Commercial launch across all software products</div>
                      </div>
                    </div>
                    <div className="w-4 h-4 bg-purple-500 rounded-full border-4 border-white shadow relative z-10"></div>
                    <div className="flex-1 pl-8"></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">All milestones tracking to schedule with partner development teams</span>
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