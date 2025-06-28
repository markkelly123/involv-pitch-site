import Head from 'next/head'
import Image from 'next/image'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import PitchNavigation from '../components/PitchNavigation'
import { SummaryView, DetailedView } from '../components/ViewSwitch'

export default function Solution() {
  return (
    <>
      <Head>
        <title>Our Solution - Involv Investment Pitch</title>
        <meta name="description" content="Involv provides the only integrated offering addressing all aspects of gaming compliance and performance with services and software." />
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
                The Complete Solution
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                The only integrated offering addressing all aspects of gaming compliance and performance
              </p>
            </div>
          </SummaryView>
          <DetailedView>
            <div className="mb-8 pt-24 text-left max-w-3xl mx-auto">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
                OUR SOLUTION
              </h1>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Involv provides the only integrated offering addressing all aspects of gaming compliance and performance with services and software:</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>(A) Services</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                1. <strong>AML Advisory & Program Design</strong> -- Independent reviews, AML/CTF Program development, regulator liaison, and readiness assessments.
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                2. <strong>Risk & Compliance Consulting</strong> -- Control design, testing, and full‑cycle GRC implementations tailored to venue realities.
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                3. <strong>Gaming Performance Consulting</strong> -- Establishing data pipelines, KPI frameworks and actionable reporting to unlock revenue growth.
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>(B) Software Suite</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>(1) Assure GRC Platform</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Purpose-built SaaS solution for gaming venue compliance
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Comprehensive obligations register and control mapping
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Real-time regulatory updates and compliance tracking
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Risk assessment and management
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>(2) Sentinel Transaction Monitoring</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Real-time automated AML monitoring and reporting engine
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Custom rules development and implementation
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Real time rules-based alerting
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Compliance reporting
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>(3) SafePlay Safer Gaming Monitoring</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Behavioural analytics and patron‑messaging platform
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Identifies at risk behaviours that could lead to gambling harm
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Custom built advanced algorithms triggered alerts providing timely RG interventions
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Monitor, record & log player interactions in compliance platform
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Exceeds regulatory requirements
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>(4) PrimeEdge Gaming Optimisation</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • AI-powered EGM performance optimisation and analytics
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Revenue maximisation whilst maintaining responsible gaming
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Data-driven insights for game selection and conversion, link strategy, machine lifecycle management, and floor layout.
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • RTP and jackpot modelling
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                <strong>Key Differentiators</strong>
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • End‑to‑end platform: advisory + GRC + performance + real‑time AML + safer gambling.
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Built by operators for operators -- minimal learning curve, immediate operational impact.
              </p>
              <p className="text-gray-700 mb-4 pb-2 border-b border-gray-300">
                • Real‑time analytics across compliance *and* revenue levers -- first‑mover advantage in the sector.
              </p>
              <p className="text-gray-700 mb-4">
                • Modular adoption: venues can start with a single module or service and scale; shared data layer unifies insights across the ecosystem.
              </p>
            </div>
          </DetailedView>

          {/* Value Proposition */}
          <SummaryView>
            <div className="bg-gradient-to-r from-[#66899b] to-[#5a7a8a] rounded-2xl p-8 mb-16 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Advisory Services + Software Platform</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                End-to-end platform combining expert advisory with purpose-built technology for Australian pubs and clubs
              </p>
            </div>
          </SummaryView>

          {/* Services Section */}
          <SummaryView>
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Advisory Services</h2>
                <p className="text-lg text-gray-600">Expert consulting to build foundational compliance and performance capabilities</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* AML Advisory */}
                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 ml-4">AML Advisory & Program Design</h3>
                  </div>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Independent reviews and assessments
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      AML/CTF Program development
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Regulator liaison and readiness
                    </li>
                  </ul>
                </div>

                {/* Risk & Compliance */}
                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 ml-4">Risk & Compliance Consulting</h3>
                  </div>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Control design and testing
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Full-cycle GRC implementations
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Tailored to venue realities
                    </li>
                  </ul>
                </div>

                {/* Gaming Performance */}
                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 ml-4">Gaming Performance Consulting</h3>
                  </div>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Data pipelines and KPI frameworks
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Actionable performance reporting
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Unlock revenue growth opportunities
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </SummaryView>

          {/* Software Suite Section */}
          <SummaryView>
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Software Platform</h2>
                <p className="text-lg text-gray-600">Purpose-built SaaS solutions for gaming venue operations</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Assure GRC */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200">
                  <div className="flex items-center mb-6">
                    <Image
                      src="/logo-involv-assure-white2.svg"
                      alt="Involv Assure"
                      width={120}
                      height={40}
                      className="h-8 w-auto filter brightness-0"
                    />
                    <span className="ml-4 text-sm text-blue-600 font-medium">GRC Platform</span>
                  </div>
                  <p className="text-blue-800 font-medium mb-4">A compliance team in your browser</p>
                  <ul className="space-y-2 text-blue-700 text-sm">
                    <li>• Comprehensive obligations register</li>
                    <li>• Real-time regulatory updates</li>
                    <li>• Risk assessment and management</li>
                    <li>• Control mapping and tracking</li>
                  </ul>
                </div>

                {/* Sentinel AML */}
                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-8 border border-red-200">
                  <div className="flex items-center mb-6">
                    <Image
                      src="/logo-sentinel-white.png"
                      alt="Sentinel"
                      width={120}
                      height={40}
                      className="h-8 w-auto filter brightness-0"
                    />
                    <span className="ml-4 text-sm text-red-600 font-medium">Transaction Monitoring</span>
                  </div>
                  <p className="text-red-800 font-medium mb-4">Real-time transaction monitoring</p>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li>• Automated AML monitoring engine</li>
                    <li>• Custom rules development</li>
                    <li>• Real-time rules-based alerting</li>
                    <li>• Compliance reporting dashboard</li>
                  </ul>
                </div>

                {/* SafePlay */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 border border-green-200">
                  <div className="flex items-center mb-6">
                    <Image
                      src="/logo-safeplay-white.png"
                      alt="SafePlay"
                      width={120}
                      height={40}
                      className="h-8 w-auto filter brightness-0"
                    />
                    <span className="ml-4 text-sm text-green-600 font-medium">Safer Gaming</span>
                  </div>
                  <p className="text-green-800 font-medium mb-4">Real-time safer gaming monitoring</p>
                  <ul className="space-y-2 text-green-700 text-sm">
                    <li>• Behavioural analytics platform</li>
                    <li>• Advanced harm detection algorithms</li>
                    <li>• Timely intervention triggers</li>
                    <li>• Exceeds regulatory requirements</li>
                  </ul>
                </div>

                {/* PrimeEdge */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 border border-purple-200">
                  <div className="flex items-center mb-6">
                    <Image
                      src="/logo-involv-primeedge-white2.svg"
                      alt="Involv PrimeEdge"
                      width={120}
                      height={40}
                      className="h-8 w-auto filter brightness-0"
                    />
                    <span className="ml-4 text-sm text-purple-600 font-medium">Gaming Optimisation</span>
                  </div>
                  <p className="text-purple-800 font-medium mb-4">The science behind high-performance gaming venues</p>
                  <ul className="space-y-2 text-purple-700 text-sm">
                    <li>• AI-powered EGM optimisation</li>
                    <li>• Revenue maximisation analytics</li>
                    <li>• Game selection and floor layout</li>
                    <li>• RTP and jackpot modelling</li>
                  </ul>
                </div>
              </div>
            </div>
          </SummaryView>

          {/* Key Differentiators */}
          <SummaryView>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Differentiators</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-[#66899b] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-900 mb-1">End-to-End Platform</h3>
                      <p className="text-gray-600 text-sm">Advisory + GRC + performance + real-time AML + safer gambling in one integrated solution</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-[#66899b] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-900 mb-1">Built by Operators for Operators</h3>
                      <p className="text-gray-600 text-sm">Minimal learning curve with immediate operational impact</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-[#66899b] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-900 mb-1">Real-Time Analytics</h3>
                      <p className="text-gray-600 text-sm">Unified insights across compliance and revenue levers - first-mover advantage</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-[#66899b] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-900 mb-1">Modular Adoption</h3>
                      <p className="text-gray-600 text-sm">Start with one module and scale; shared data layer unifies the ecosystem</p>
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