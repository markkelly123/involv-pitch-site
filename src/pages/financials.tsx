import Head from 'next/head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import PitchNavigation from '../components/PitchNavigation'
import { SummaryView, DetailedView } from '../components/ViewSwitch'

export default function Financials() {
  return (
    <>
      <Head>
        <title>Financial Projections - Involv Investment Pitch</title>
        <meta name="description" content="5-year revenue projection from $2.3M to $25.1M with 85%+ gross margins and strong unit economics." />
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
                Financial Projections
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Scalable SaaS model with strong unit economics and rapid growth trajectory
              </p>
            </div>
          </SummaryView>

          <DetailedView>
            <div className="mb-8 pt-24 text-left max-w-3xl mx-auto">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
                FINANCIAL PROJECTIONS
              </h1>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Scalable SaaS Model with Strong Unit Economics</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>5-Year Revenue Projection:</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Year 1:</strong> Venues: 65, Consulting: $1.1M, Assure GRC: $47K, Sentinel TM: $774K, SafePlay: $165K, PrimeEdge: $242K, Total Revenue: $2.3M
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Year 2:</strong> Venues: 210, Consulting: $2.5M, Assure GRC: $216K, Sentinel TM: $2.8M, SafePlay: $751K, PrimeEdge: $1.1M, Total Revenue: $7.3M
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Year 3:</strong> Venues: 345, Consulting: $3.7M, Assure GRC: $521K, Sentinel TM: $5.4M, SafePlay: $1.5M, PrimeEdge: $2.3M, Total Revenue: $13.5M
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Year 4:</strong> Venues: 396, Consulting: $4.6M, Assure GRC: $860K, Sentinel TM: $8.1M, SafePlay: $2.3M, PrimeEdge: $3.6M, Total Revenue: $19.4M
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Year 5:</strong> Venues: 400, Consulting: $5.4M, Assure GRC: $1.2M, Sentinel TM: $10.6M, SafePlay: $3.1M, PrimeEdge: $4.8M, Total Revenue: $25.1M
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Key Metrics:</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Year 5 ARR: $18.6M
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Gross margin: 85%+ by Year 3
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • EBITDA positive: Year 2
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Cash flow positive: Year 2
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Assumptions:</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Average customer value grows 15-20% from $35K annually
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Customer acquisition: 65-400 new customers per year by Year 5
              </p>
              <p className="text-gray-700 mb-4">
                • Churn rate decreases from 10% to 6% as product matures
              </p>
            </div>
          </DetailedView>

          {/* Key Financial Metrics */}
          <SummaryView>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white text-center">
                <div className="text-3xl font-bold mb-2">$25.1M</div>
                <div className="text-sm opacity-90">Year 5 Revenue Target</div>
              </div>
              <div className="bg-gradient-to-r from-[#66899b] to-[#5a7a8a] rounded-xl p-6 text-white text-center">
                <div className="text-3xl font-bold mb-2">$18.6M</div>
                <div className="text-sm opacity-90">Year 5 ARR</div>
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white text-center">
                <div className="text-3xl font-bold mb-2">85%+</div>
                <div className="text-sm opacity-90">Gross Margin by Year 3</div>
              </div>
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white text-center">
                <div className="text-3xl font-bold mb-2">Year 2</div>
                <div className="text-sm opacity-90">EBITDA & Cash Flow Positive</div>
              </div>
            </div>
          </SummaryView>

          {/* 5-Year Revenue Projection Table */}
          <SummaryView>
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">5-Year Revenue Projection</h2>
              
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Revenue Stream</th>
                        <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">Year 1</th>
                        <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">Year 2</th>
                        <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">Year 3</th>
                        <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">Year 4</th>
                        <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">Year 5</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                            <span className="font-medium text-gray-900">Consulting</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center text-sm font-medium text-gray-900">$1.1M</td>
                        <td className="px-6 py-4 text-center text-sm font-medium text-gray-900">$2.5M</td>
                        <td className="px-6 py-4 text-center text-sm font-medium text-gray-900">$3.7M</td>
                        <td className="px-6 py-4 text-center text-sm font-medium text-gray-900">$4.6M</td>
                        <td className="px-6 py-4 text-center text-sm font-medium text-gray-900">$5.4M</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-indigo-500 rounded-full mr-3"></div>
                            <span className="font-medium text-gray-900">Assure GRC</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center text-sm font-medium text-gray-900">$47K</td>
                        <td className="px-6 py-4 text-center text-sm font-medium text-gray-900">$216K</td>
                        <td className="px-6 py-4 text-center text-sm font-medium text-gray-900">$521K</td>
                        <td className="px-6 py-4 text-center text-sm font-medium text-gray-900">$860K</td>
                        <td className="px-6 py-4 text-center text-sm font-medium text-gray-900">$1.2M</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                            <span className="font-medium text-gray-900">Sentinel TM</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center text-sm font-medium text-gray-900">$774K</td>
                        <td className="px-6 py-4 text-center text-sm font-medium text-gray-900">$2.8M</td>
                        <td className="px-6 py-4 text-center text-sm font-medium text-gray-900">$5.4M</td>
                        <td className="px-6 py-4 text-center text-sm font-medium text-gray-900">$8.1M</td>
                        <td className="px-6 py-4 text-center text-sm font-medium text-gray-900">$10.6M</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                            <span className="font-medium text-gray-900">SafePlay</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center text-sm font-medium text-gray-900">$165K</td>
                        <td className="px-6 py-4 text-center text-sm font-medium text-gray-900">$751K</td>
                        <td className="px-6 py-4 text-center text-sm font-medium text-gray-900">$1.5M</td>
                        <td className="px-6 py-4 text-center text-sm font-medium text-gray-900">$2.3M</td>
                        <td className="px-6 py-4 text-center text-sm font-medium text-gray-900">$3.1M</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                            <span className="font-medium text-gray-900">PrimeEdge</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center text-sm font-medium text-gray-900">$242K</td>
                        <td className="px-6 py-4 text-center text-sm font-medium text-gray-900">$1.1M</td>
                        <td className="px-6 py-4 text-center text-sm font-medium text-gray-900">$2.3M</td>
                        <td className="px-6 py-4 text-center text-sm font-medium text-gray-900">$3.6M</td>
                        <td className="px-6 py-4 text-center text-sm font-medium text-gray-900">$4.8M</td>
                      </tr>
                      <tr className="bg-[#66899b] text-white">
                        <td className="px-6 py-4 font-bold">Total Revenue</td>
                        <td className="px-6 py-4 text-center font-bold">$2.3M</td>
                        <td className="px-6 py-4 text-center font-bold">$7.3M</td>
                        <td className="px-6 py-4 text-center font-bold">$13.5M</td>
                        <td className="px-6 py-4 text-center font-bold">$19.4M</td>
                        <td className="px-6 py-4 text-center font-bold">$25.1M</td>
                      </tr>
                      <tr className="bg-gray-100">
                        <td className="px-6 py-4 font-medium text-gray-700">Venues</td>
                        <td className="px-6 py-4 text-center font-medium text-gray-700">65</td>
                        <td className="px-6 py-4 text-center font-medium text-gray-700">210</td>
                        <td className="px-6 py-4 text-center font-medium text-gray-700">345</td>
                        <td className="px-6 py-4 text-center font-medium text-gray-700">396</td>
                        <td className="px-6 py-4 text-center font-medium text-gray-700">400</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </SummaryView>

          {/* Revenue Mix Evolution */}
          <SummaryView>
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Revenue Mix Evolution</h2>
              
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Year 1 ($2.3M)</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-4 h-4 bg-blue-500 rounded mr-3"></div>
                          <span className="text-sm font-medium">Consulting</span>
                        </div>
                        <span className="text-sm font-bold text-blue-600">48%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '48%' }}></div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-4 h-4 bg-red-500 rounded mr-3"></div>
                          <span className="text-sm font-medium">Sentinel TM</span>
                        </div>
                        <span className="text-sm font-bold text-red-600">34%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{ width: '34%' }}></div>
                      </div>
                      
                      <div className="text-sm text-gray-600 mt-4">
                        Heavy consulting focus in early stage with transaction monitoring as primary SaaS product
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Year 5 ($25.1M)</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-4 h-4 bg-red-500 rounded mr-3"></div>
                          <span className="text-sm font-medium">Sentinel TM</span>
                        </div>
                        <span className="text-sm font-bold text-red-600">42%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{ width: '42%' }}></div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-4 h-4 bg-blue-500 rounded mr-3"></div>
                          <span className="text-sm font-medium">Consulting</span>
                        </div>
                        <span className="text-sm font-bold text-blue-600">22%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '22%' }}></div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-4 h-4 bg-purple-500 rounded mr-3"></div>
                          <span className="text-sm font-medium">PrimeEdge</span>
                        </div>
                        <span className="text-sm font-bold text-purple-600">19%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: '19%' }}></div>
                      </div>
                      
                      <div className="text-sm text-gray-600 mt-4">
                        SaaS-dominant model with balanced product portfolio and sustained advisory revenue
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SummaryView>

          {/* Path to Profitability */}
          <SummaryView>
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Path to Profitability</h2>
              
              <div className="bg-gradient-to-r from-[#66899b] to-[#5a7a8a] rounded-2xl p-8 text-white">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">Year 1</div>
                    <div className="text-lg mb-3">Investment Phase</div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-sm opacity-90 mb-2">Revenue: $2.3M</div>
                      <div className="text-sm opacity-90 mb-2">Focus: Market entry</div>
                      <div className="text-sm opacity-90">Team building & product launch</div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">Year 2</div>
                    <div className="text-lg mb-3">Break-Even</div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-sm opacity-90 mb-2">Revenue: $7.3M</div>
                      <div className="text-sm opacity-90 mb-2">EBITDA Positive</div>
                      <div className="text-sm opacity-90">Cash Flow Positive</div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">Year 3+</div>
                    <div className="text-lg mb-3">Scale Phase</div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-sm opacity-90 mb-2">Revenue: $13.5M+</div>
                      <div className="text-sm opacity-90 mb-2">85%+ Gross Margin</div>
                      <div className="text-sm opacity-90">Strong profitability</div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center px-6 py-3 bg-white/20 rounded-lg">
                    <span className="text-sm font-medium">Conservative projections with multiple scenario planning</span>
                  </div>
                </div>
              </div>
            </div>
          </SummaryView>

          {/* Key Assumptions */}
          <SummaryView>
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Key Financial Assumptions</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Customer Metrics</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">Average Customer Value Growth</span>
                      <span className="text-sm font-bold text-[#66899b]">15-20% annually</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">Starting ACV</span>
                      <span className="text-sm font-bold text-[#66899b]">$35,000</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">Annual Churn Rate</span>
                      <span className="text-sm font-bold text-[#66899b]">10% → 6%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">Customer Acquisition</span>
                      <span className="text-sm font-bold text-[#66899b]">65 → 400 venues</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Operating Metrics</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">Gross Margin Target</span>
                      <span className="text-sm font-bold text-[#66899b]">85%+ by Year 3</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">Advisory Conversion Rate</span>
                      <span className="text-sm font-bold text-[#66899b]">60% to SaaS</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">Market Penetration</span>
                      <span className="text-sm font-bold text-[#66899b]">10% by Year 5</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">CAC Payback Period</span>
                      <span className="text-sm font-bold text-[#66899b]">&lt;1 month</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SummaryView>

          {/* Scenario Analysis */}
          <SummaryView>
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Scenario Analysis</h2>
              
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Scenario</th>
                        <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">Year 5 Revenue</th>
                        <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">Venues</th>
                        <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">Key Assumptions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-red-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                            <span className="font-medium text-gray-900">Conservative</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center font-medium text-gray-900">$18M</td>
                        <td className="px-6 py-4 text-center font-medium text-gray-900">280</td>
                        <td className="px-6 py-4 text-sm text-gray-600">Slower adoption, higher churn, limited partnerships</td>
                      </tr>
                      <tr className="hover:bg-blue-50 bg-blue-25">
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-[#66899b] rounded-full mr-3"></div>
                            <span className="font-medium text-gray-900">Base Case</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center font-medium text-gray-900">$25.1M</td>
                        <td className="px-6 py-4 text-center font-medium text-gray-900">400</td>
                        <td className="px-6 py-4 text-sm text-gray-600">Current assumptions, steady execution</td>
                      </tr>
                      <tr className="hover:bg-green-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                            <span className="font-medium text-gray-900">Optimistic</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center font-medium text-gray-900">$35M</td>
                        <td className="px-6 py-4 text-center font-medium text-gray-900">550</td>
                        <td className="px-6 py-4 text-sm text-gray-600">Strong partnerships, faster product adoption, expansion</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </SummaryView>

          {/* Investment Requirements */}
          <SummaryView>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 border border-blue-200">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Investment Requirements</h2>
                <p className="text-lg text-gray-700">Seeking funding to accelerate growth and product development</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Funding Milestones</h3>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="font-medium text-gray-900 mb-2">200 Venues by End Year 2</div>
                      <div className="text-sm text-gray-600">Accelerated customer acquisition through partnerships</div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="font-medium text-gray-900 mb-2">Full Product Suite Launch</div>
                      <div className="text-sm text-gray-600">Assure, Sentinel, SafePlay, and PrimeEdge in market</div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="font-medium text-gray-900 mb-2">$4M ARR Target</div>
                      <div className="text-sm text-gray-600">Strong recurring revenue foundation</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Use of Funds</h3>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-900">Product Development & JV</span>
                        <span className="text-sm font-bold text-blue-600">40%</span>
                      </div>
                      <div className="text-sm text-gray-600">Enhanced platform features and partnerships</div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-900">Sales & Marketing</span>
                        <span className="text-sm font-bold text-blue-600">35%</span>
                      </div>
                      <div className="text-sm text-gray-600">Brand building, lead generation, team expansion</div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-900">Working Capital</span>
                        <span className="text-sm font-bold text-blue-600">25%</span>
                      </div>
                      <div className="text-sm text-gray-600">General corporate purposes and growth capital</div>
                    </div>
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