import Head from 'next/head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import PitchNavigation from '../components/PitchNavigation'
import { SummaryView, DetailedView } from '../components/ViewSwitch'

export default function BusinessModel() {
  return (
    <>
      <Head>
        <title>Business Model - Involv Investment Pitch</title>
        <meta name="description" content="Multi-revenue stream SaaS + Services model with 70%+ gross margins and strong unit economics." />
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
                Scalable Business Model
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Multi-revenue stream SaaS + Services model with exceptional unit economics
              </p>
            </div>
          </SummaryView>
          <DetailedView>
            <div className="mb-8 pt-24 text-left max-w-3xl mx-auto">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
                BUSINESS MODEL
              </h1>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Multi-Revenue Stream SaaS + Services Model</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Recurring Revenue:</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • SaaS subscriptions for Assure, PrimeEdge, Sentinel (real‑time AML monitoring), and SafePlay (safer‑gaming behavioural analytics).
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Advisory Services:</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • High‑margin consulting engagements that seed software adoption and drive cross‑sell.
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Revenue Streams:</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Monthly SaaS fees tiered by venue size, number of EGMs, and modules.
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Add‑on usage‑based pricing for high‑volume Sentinel alerting.
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • One‑off implementation and training services.
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Ongoing consulting retainers and compliance audits.
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Commission‑sharing from new channel partnerships (w/ industry incumbents).
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Advisory & Consulting Services:</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Project-based compliance consulting: $15,000-85,000 per engagement
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Ongoing retainer agreements: $7,500-10,000/month
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Training and certification programmes: $500-2,000 per person
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • 70% gross margins on services
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Assure SaaS Platform:</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Tiered subscription model: $500-2,500/month per venue
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Based on venue size, EGM count, and feature requirements (modules)
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • 70%+ gross margins on software revenue
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Sentinel Transaction Monitoring software:</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Tiered subscription model: $500-2,500/month per venue
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Based on venue size, EGM count, and feature requirements (modules)
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • 70%+ gross margins on software revenue
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>SafePlay Safer Gaming software:</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Tiered subscription model: $500-2,500/month per venue
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Based on venue size, EGM count, and feature requirements (modules)
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • 70%+ gross margins on software revenue
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>PrimeEdge Gaming Optimisation:</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Tiered subscription model based on EGM count: $10-22/month per EGM
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Fixed monthly analytics platform: $500-2,500/month
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • 80% gross margins
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Customer Metrics:</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Customer Acquisition Cost (CAC): c.$3,000; Payback period: &gt;1 month
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Customer Lifetime Value (LTV): c.$150,000
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • LTV:CAC Ratio: c.50:1
              </p>
              <p className="text-gray-700 mb-4">
                • Monthly churn rate: forecast at 10%
              </p>
            </div>
          </DetailedView>

          {/* Revenue Model Overview */}
          <SummaryView>
            <div className="bg-gradient-to-r from-[#66899b] to-[#5a7a8a] rounded-2xl p-8 mb-20 text-white">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Revenue Streams</h2>
                <p className="text-xl opacity-90">Diversified approach combining recurring SaaS and high-margin services</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4">Recurring Revenue</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Monthly SaaS subscriptions (Assure, Sentinel, SafePlay, PrimeEdge)</li>
                    <li>• Tiered pricing by venue size and EGM count</li>
                    <li>• Usage-based add-ons for high-volume alerting</li>
                    <li>• Ongoing consulting retainers</li>
                  </ul>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4">Project Revenue</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• High-margin consulting engagements</li>
                    <li>• One-off implementation and training</li>
                    <li>• Compliance audits and assessments</li>
                    <li>• Channel partnership commissions</li>
                  </ul>
                </div>
              </div>
            </div>
          </SummaryView>

          {/* Advisory Services Pricing */}
          <SummaryView>
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Advisory & Consulting Services</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Project Engagements</h3>
                    <div className="text-3xl font-bold text-[#66899b] mb-1">$15K - $85K</div>
                    <div className="text-sm text-gray-600">Per engagement</div>
                  </div>
                  <ul className="space-y-3 text-gray-600 text-sm">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#66899b] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Compliance consulting projects
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#66899b] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      AML program development
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#66899b] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Independent assessments
                    </li>
                  </ul>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">70%</div>
                      <div className="text-xs text-gray-500">Gross Margin</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Ongoing Retainers</h3>
                    <div className="text-3xl font-bold text-[#66899b] mb-1">$7.5K - $10K</div>
                    <div className="text-sm text-gray-600">Per month</div>
                  </div>
                  <ul className="space-y-3 text-gray-600 text-sm">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#66899b] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Ongoing compliance support
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#66899b] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Regular health checks
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#66899b] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Strategic advisory access
                    </li>
                  </ul>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">70%</div>
                      <div className="text-xs text-gray-500">Gross Margin</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Training Programs</h3>
                    <div className="text-3xl font-bold text-[#66899b] mb-1">$500 - $2K</div>
                    <div className="text-sm text-gray-600">Per person</div>
                  </div>
                  <ul className="space-y-3 text-gray-600 text-sm">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#66899b] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Board and executive training
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#66899b] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Staff certification programs
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#66899b] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Compliance workshops
                    </li>
                  </ul>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">70%</div>
                      <div className="text-xs text-gray-500">Gross Margin</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SummaryView>

          {/* SaaS Pricing Table */}
          <SummaryView>
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Software Platform Pricing</h2>
              
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Product</th>
                        <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">Pricing Model</th>
                        <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">Range</th>
                        <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">Gross Margin</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                            <div>
                              <div className="font-medium text-gray-900">Assure GRC</div>
                              <div className="text-sm text-gray-600">Compliance management platform</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center text-sm text-gray-600">Monthly subscription by venue size</td>
                        <td className="px-6 py-4 text-center">
                          <div className="font-medium text-gray-900">$500 - $2,500</div>
                          <div className="text-sm text-gray-600">per month</div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            70%+
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                            <div>
                              <div className="font-medium text-gray-900">Sentinel</div>
                              <div className="text-sm text-gray-600">Transaction monitoring</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center text-sm text-gray-600">Monthly subscription + usage</td>
                        <td className="px-6 py-4 text-center">
                          <div className="font-medium text-gray-900">$500 - $2,500</div>
                          <div className="text-sm text-gray-600">per month</div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            70%+
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                            <div>
                              <div className="font-medium text-gray-900">SafePlay</div>
                              <div className="text-sm text-gray-600">Safer gaming monitoring</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center text-sm text-gray-600">Monthly subscription by venue size</td>
                        <td className="px-6 py-4 text-center">
                          <div className="font-medium text-gray-900">$500 - $2,500</div>
                          <div className="text-sm text-gray-600">per month</div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            70%+
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                            <div>
                              <div className="font-medium text-gray-900">PrimeEdge</div>
                              <div className="text-sm text-gray-600">Gaming optimisation</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center text-sm text-gray-600">Per EGM + platform fee</td>
                        <td className="px-6 py-4 text-center">
                          <div className="font-medium text-gray-900">$10 - $22</div>
                          <div className="text-sm text-gray-600">per EGM/month</div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            80%
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </SummaryView>

          {/* Unit Economics */}
          <SummaryView>
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Strong Unit Economics</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">$3,000</div>
                  <div className="text-sm text-gray-600 mb-2">Customer Acquisition Cost</div>
                  <div className="text-xs text-green-600 font-medium">50% below industry average</div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">$150,000</div>
                  <div className="text-sm text-gray-600 mb-2">Customer Lifetime Value</div>
                  <div className="text-xs text-blue-600 font-medium">Blended services + software</div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">50:1</div>
                  <div className="text-sm text-gray-600 mb-2">LTV:CAC Ratio</div>
                  <div className="text-xs text-green-600 font-medium">Exceptional efficiency</div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 text-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">&lt;1 Month</div>
                  <div className="text-sm text-gray-600 mb-2">Payback Period</div>
                  <div className="text-xs text-blue-600 font-medium">Rapid cash recovery</div>
                </div>
              </div>
            </div>
          </SummaryView>

          {/* Land and Expand Strategy */}
          <SummaryView>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 border border-blue-200">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Land & Expand Strategy</h2>
                <p className="text-lg text-gray-700">Advisory-led approach builds trust and drives software adoption</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">1</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Land</h3>
                  <p className="text-sm text-gray-700">AML advisory or compliance consulting engagement builds relationship and demonstrates value</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">2</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Expand</h3>
                  <p className="text-sm text-gray-700">Introduce Assure and Sentinel SaaS modules to automate and scale compliance processes</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">3</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Optimise</h3>
                  <p className="text-sm text-gray-700">Cross-sell PrimeEdge and SafePlay for complete operational excellence and revenue optimisation</p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <div className="inline-flex items-center px-4 py-2 bg-white rounded-lg shadow">
                  <span className="text-sm font-medium text-gray-700">60% advisory client conversion to SaaS within 12 months</span>
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