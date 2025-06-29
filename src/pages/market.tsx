import Head from 'next/head'
import Image from 'next/image'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import PitchNavigation from '../components/PitchNavigation'
import { SummaryView, DetailedView } from '../components/ViewSwitch'

export default function Market() {
  return (
    <>
      <Head>
        <title>Market Opportunity - Involv Investment Pitch</title>
        <meta name="description" content="$537M TAM in Australian gaming compliance market with 3,750+ licensed venues and growing regulatory requirements." />
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
                Massive Market Opportunity
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Australia's $15 billion gaming industry faces unprecedented regulatory complexity
              </p>
            </div>
          </SummaryView>
          <DetailedView>
            <div className="mb-8 pt-24 text-left max-w-3xl mx-auto">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
                MARKET OPPORTUNITY
              </h1>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Total Addressable Market (TAM): $537 million annually</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Serviceable Addressable Market (SAM): $416 million</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • c.3,750 licensed gaming venues across Australia (pubs and clubs); c.2,500 unique owners
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • 195,000+ electronic gaming machines (EGMs)
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Conservatively ~A$1.3 billion annual spend on gaming systems, EGMs and EGM game conversions, compliance, risk, gaming‑performance analytics, and related advisory
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Current average compliance spending: $50,000 per venue annually
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Market Drivers:</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Increasing regulatory requirements (state gaming regulators)
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • AUSTRAC expectation for venue‑specific transaction monitoring systems.
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • 300%+ increase in state level enforcement actions and penalties since 2021 (across AML, responsible gambling and licence breaches)
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Digital transformation in hospitality sector
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Growing focus on harm minimisation (i.e., responsible gaming practices)
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Increasing operational efficiency with margin head winds
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Market Trends:</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Shift from manual to digital compliance processes
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Integration of gaming and hospitality operations
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Accountability of Boards -- particularly in gaming. Boards need to demonstrate they are proactive and diligent in monitoring emerging issues before they become full blown crises.
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Demand for real-time data and analytics to meet expectations from regulators for proactive risk detection, faster decision-making regarding customer retention, and more transparent reporting.
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Serviceable Obtainable Market (SOM): $25 million</strong> (5-year target)
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • 400 venues (10% market penetration)
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Average annual customer value: $35,000+
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Upside Levers (not in base TAM):</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • <strong>Channel Partnerships</strong> -- commissions dilute unit LTV slightly but significantly accelerate client acquisition and revenue velocity.
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • <strong>Lane Consulting</strong> -- AML Tranche 2 entities advisory
              </p>
              <p className="text-gray-700 mb-4">
                ¹ <strong>State Breakdown (venues):</strong> NSW 1,369 | QLD 968 | VIC 487 | SA 267 | TAS 93 | ACT 59 | NT 503 | WA (EGMs not permitted).
              </p>
            </div>
          </DetailedView>

          {/* Market Size Overview */}
          <SummaryView>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-8 text-white text-center">
                <div className="text-4xl font-bold mb-3">$537M</div>
                <div className="text-lg font-medium mb-2">Total Addressable Market</div>
                <div className="text-sm opacity-90">Annual compliance & technology spend</div>
              </div>
              <div className="bg-gradient-to-r from-[#66899b] to-[#5a7a8a] rounded-xl p-8 text-white text-center">
                <div className="text-4xl font-bold mb-3">$416M</div>
                <div className="text-lg font-medium mb-2">Serviceable Addressable Market</div>
                <div className="text-sm opacity-90">Target venue segment</div>
              </div>
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-8 text-white text-center">
                <div className="text-4xl font-bold mb-3">$25M</div>
                <div className="text-lg font-medium mb-2">5th Year Revenue Target</div>
                <div className="text-sm opacity-90">6% market penetration</div>
              </div>
            </div>
          </SummaryView>

          {/* Market Fundamentals */}
          <SummaryView>
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-20 border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Market Fundamentals</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m4 0V9a2 2 0 011-1h4a2 2 0 011 1v12m-6 0h6m0 0v-9" />
                    </svg>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">c. 3,750+</div>
                  <div className="text-sm text-gray-600">Licensed gaming venues</div>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">c. 2,500</div>
                  <div className="text-sm text-gray-600">Unique venue owners</div>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2V7a2 2 0 00-2-2H9a2 2 0 00-2 2z" />
                    </svg>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">195,000+</div>
                  <div className="text-sm text-gray-600">Electronic gaming machines</div>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">$50,000</div>
                  <div className="text-sm text-gray-600">Avg ann. compliance spend per venue</div>
                </div>
              </div>
            </div>
          </SummaryView>

          {/* Market Drivers */}
          <SummaryView>
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Key Market Drivers</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-red-50 rounded-xl p-8 border border-red-200">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5l-6.928-12c-.77-.833-2.186-.833-2.956 0l-6.928 12c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-red-900 ml-4">Regulatory Enforcement</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="text-3xl font-bold text-red-600 mr-4">300%+</div>
                      <div className="text-red-800">
                        <div className="font-medium">Increase in enforcement actions</div>
                        <div className="text-sm">Since 2021 across AML & responsible gambling</div>
                      </div>
                    </div>
                    <ul className="text-red-700 text-sm space-y-1">
                      <li>• AUSTRAC expectations for venue-specific monitoring</li>
                      <li>• Increasing state gaming regulator requirements</li>
                      <li>• Growing focus on harm minimisation practices</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 ml-4">Digital Transformation</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="text-blue-800">
                      <div className="font-medium mb-2">Shift from manual to digital processes</div>
                    </div>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• Integration of gaming and hospitality operations</li>
                      <li>• Board accountability for risk management</li>
                      <li>• Demand for real-time data and analytics</li>
                      <li>• Operational efficiency with margin pressures</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </SummaryView>

          {/* State Breakdown */}
          <SummaryView>
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-20 border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Market Distribution by State (Number of Gaming Venues)</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900 mb-1">1,369</div>
                  <div className="text-sm font-medium text-gray-600">NSW</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900 mb-1">968</div>
                  <div className="text-sm font-medium text-gray-600">QLD</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900 mb-1">487</div>
                  <div className="text-sm font-medium text-gray-600">VIC</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900 mb-1">503</div>
                  <div className="text-sm font-medium text-gray-600">NT</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900 mb-1">267</div>
                  <div className="text-sm font-medium text-gray-600">SA</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900 mb-1">93</div>
                  <div className="text-sm font-medium text-gray-600">TAS</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900 mb-1">59</div>
                  <div className="text-sm font-medium text-gray-600">ACT</div>
                </div>
              </div>
              <p className="text-sm text-gray-500 text-center mt-4">
                *WA not included - EGMs not permitted in pubs and clubs
              </p>
            </div>
          </SummaryView>

          {/* Target Market Penetration */}
          <SummaryView>
            <div className="bg-gradient-to-r from-[#66899b] to-[#5a7a8a] rounded-2xl p-8 text-white mb-20">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">5-Year Target</h2>
                <p className="text-xl opacity-90">Conservative 6% market penetration goal</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold mb-3">400</div>
                  <div className="text-lg mb-2">Target venues</div>
                  <div className="text-sm opacity-80">6% of total market value</div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold mb-3">$35,000+</div>
                  <div className="text-lg mb-2">Average annual customer value</div>
                  <div className="text-sm opacity-80">Blended services + software</div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold mb-3">$25M</div>
                  <div className="text-lg mb-2">Target annual revenue</div>
                  <div className="text-sm opacity-80">72% ARR</div>
                </div>
              </div>
            </div>
          </SummaryView>

          {/* Industry Recognition */}
          <SummaryView>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Industry Partnerships & Recognition</h2>
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                <Image
                  src="/assoc-logos.png"
                  alt="Industry Association Logos"
                  width={800}
                  height={200}
                  className="mx-auto max-w-full h-auto"
                />
                <p className="text-gray-600 text-sm mt-4">
                  Leading industry associations across Australia
                </p>
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